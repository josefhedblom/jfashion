import { Image } from 'react-bootstrap';
import image from '../../assets/categories.png';
import styles from '../../css/Shop.module.css';

const Banner = () => {
    return (
        <Image src={image} className={styles.banner}></Image>
    );
}

export default Banner;