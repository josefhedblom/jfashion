import Breadcrumbs from '../components/Breadcrumbs';
import Banner from '../components/Shop/Banner';
import Categories from '../components/Shop/Categories';
import styles from '../css/Shop.module.css';
import heartIcon from '../assets/heart.svg';
import Bestsellers from '../components/Bestsellers';

const Shop = () => {
    return (
        <div className={styles.mainContent}>
            <Banner></Banner>
            <h1 className={styles.current}>Products</h1>
            <Breadcrumbs></Breadcrumbs>
            <Categories></Categories>
            <div className={styles.bestContainer}>
                <h1 className={styles.spotTitle}>Bestsellers</h1>
                <img src={heartIcon} alt="heart" className={styles.heartIcon}/>
            </div>

            {/* <Spotlight></Spotlight> */}
            <Bestsellers></Bestsellers>
        </div>
    );
}

export default Shop;