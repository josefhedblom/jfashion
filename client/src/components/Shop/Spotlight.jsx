import Carousel from 'react-bootstrap/Carousel';
import styles from '../../css/Spotlight.module.css'
import SItem from './SItem';

function Spotlight() {
  return (
    <Carousel className={styles.mainContent} data-bs-theme="dark">
      <Carousel.Item className={styles.cItem}>
        <SItem category="beauty"></SItem>
      </Carousel.Item>
      <Carousel.Item className={styles.cItem}>
        <SItem category="womens-bags"></SItem>
      </Carousel.Item>
      <Carousel.Item className={styles.cItem}>
        <SItem category="fragrances"></SItem>
      </Carousel.Item>
    </Carousel>
  );
}

export default Spotlight;