import Breadcrumbs from '../components/Breadcrumbs';
import Banner from '../components/Shop/Banner';
import Categories from '../components/Shop/Categories';
import Spotlight from '../components/Shop/Spotlight';
import styles from '../css/Shop.module.css';
import heartIcon from '../assets/heart.svg';

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

            <Spotlight></Spotlight>
        </div>
    );
}

export default Shop;