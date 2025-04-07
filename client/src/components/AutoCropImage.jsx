import React, { useEffect, useRef, useState } from 'react';
import styles from '../css/Autocrop.module.css';

const cropCache = new Map();

const AutoCropImage = ({ src, alt, className }) => {
  const [croppedSrc, setCroppedSrc] = useState(null);
  const isMounted = useRef(true);

  const BLACK_THRESHOLD = 30; // tweak this depending on how dark the bars are

  useEffect(() => {
    isMounted.current = true;

    if (!src) return;
    if (cropCache.has(src)) {
      setCroppedSrc(cropCache.get(src));
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      const w = img.width;
      const h = img.height;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);

      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;

      let top = 0, bottom = h - 1;
      let left = 0, right = w - 1;

      const isBlackPixel = (i) => {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        return r < BLACK_THRESHOLD && g < BLACK_THRESHOLD && b < BLACK_THRESHOLD;
      };

      const isRowBlack = (y) => {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          if (!isBlackPixel(i)) return false;
        }
        return true;
      };

      const isColBlack = (x) => {
        for (let y = 0; y < h; y++) {
          const i = (y * w + x) * 4;
          if (!isBlackPixel(i)) return false;
        }
        return true;
      };

      while (top < h && isRowBlack(top)) top++;
      while (bottom > top && isRowBlack(bottom)) bottom--;
      while (left < w && isColBlack(left)) left++;
      while (right > left && isColBlack(right)) right--;

      const cropW = right - left + 1;
      const cropH = bottom - top + 1;

      if (cropW <= 0 || cropH <= 0) {
        setCroppedSrc(src);
        return;
      }

      const croppedCanvas = document.createElement('canvas');
      const croppedCtx = croppedCanvas.getContext('2d');
      croppedCanvas.width = cropW;
      croppedCanvas.height = cropH;
      croppedCtx.drawImage(img, left, top, cropW, cropH, 0, 0, cropW, cropH);

      const finalSrc = croppedCanvas.toDataURL();
      cropCache.set(src, finalSrc);
      if (isMounted.current) setCroppedSrc(finalSrc);
    };

    img.onerror = () => {
      if (isMounted.current) setCroppedSrc(src); // fallback
    };

    return () => {
      isMounted.current = false;
    };
  }, [src]);

  return croppedSrc ? (
    <img src={croppedSrc} alt={alt} className={className} />
  ) : (
    <div className={styles.imageSkeleton}/>
  );
};

export default AutoCropImage;
