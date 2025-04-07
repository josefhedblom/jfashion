import React, { useEffect, useState } from 'react';
import styles from '../css/Carousel.module.css';

const Carousel = ({ items, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval]);

  return (
    <div className={styles.carousel}>
      <button onClick={goToPrev} className={styles.goBtn}>&lt;</button>

      <div className={styles.carouselItem} key={currentIndex}>
        {items[currentIndex]}
      </div>

      <button onClick={goToNext} className={styles.goBtn}>&gt;</button>
    </div>
  );
};

export default Carousel;