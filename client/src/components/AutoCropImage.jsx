// components/AutoCropImage.jsx
import React, { useEffect, useRef, useState } from "react";

const AutoCropImage = ({ src, alt, className }) => {
  const [croppedUrl, setCroppedUrl] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // needed if loading from different domain
    img.onload = () => crop(img);
    img.src = src;
  }, [src]);

  const crop = (img) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const isNotBlack = (i) => {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      return r > 10 || g > 10 || b > 10;
    };

    let top = 0, bottom = canvas.height - 1;
    let left = 0, right = canvas.width - 1;

    // Top
    outer: for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const i = (y * canvas.width + x) * 4;
        if (isNotBlack(i)) { top = y; break outer; }
      }
    }

    // Bottom
    outer: for (let y = canvas.height - 1; y >= 0; y--) {
      for (let x = 0; x < canvas.width; x++) {
        const i = (y * canvas.width + x) * 4;
        if (isNotBlack(i)) { bottom = y; break outer; }
      }
    }

    // Left
    outer: for (let x = 0; x < canvas.width; x++) {
      for (let y = top; y <= bottom; y++) {
        const i = (y * canvas.width + x) * 4;
        if (isNotBlack(i)) { left = x; break outer; }
      }
    }

    // Right
    outer: for (let x = canvas.width - 1; x >= 0; x--) {
      for (let y = top; y <= bottom; y++) {
        const i = (y * canvas.width + x) * 4;
        if (isNotBlack(i)) { right = x; break outer; }
      }
    }

    const w = right - left + 1;
    const h = bottom - top + 1;

    const croppedCanvas = document.createElement("canvas");
    croppedCanvas.width = w;
    croppedCanvas.height = h;

    croppedCanvas.getContext("2d").drawImage(
      canvas, left, top, w, h,
      0, 0, w, h
    );

    setCroppedUrl(croppedCanvas.toDataURL("image/png"));
  };

  return (
    <img
      src={croppedUrl || src}
      alt={alt}
      className={className}
    />
  );
};

export default AutoCropImage;
