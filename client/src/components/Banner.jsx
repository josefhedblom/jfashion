import { Image } from 'react-bootstrap';
import styles from '../css/Content.module.css'

import beauty from '../assets/beauty.png';
import clothing from '../assets/clothing.png';
import fragrances from '../assets/fragrances.png';
import sunglasses from '../assets/fragrances.png';
import jewellery from '../assets/fragrances.png';

const images = {
    beauty: beauty,
    fragrances: fragrances,
    sunglasses: sunglasses,
    'womens-dresses': clothing,
    'womens-jewellery': jewellery
}

const Banner = ({category}) => {
    const image = images[category]

    console.log(category);

    return (
        <Image src={image} className={styles.banner}></Image>
    );
}

export default Banner;