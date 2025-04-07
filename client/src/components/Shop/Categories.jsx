import { Link } from 'react-router-dom';
import styles from '../../css/Shop.module.css';

const Categories = () => {
    return (
        <nav className={styles.mynav}>
            <ul className={styles.categories}>
                <li><Link to="/shop/beauty">Beauty</Link></li>
                <li><Link to="/shop/fragrances">Fragrances</Link></li>
                <li><Link to="/shop/sunglasses">Sunglasses</Link></li>
                <li><Link to="/shop/womens-dresses">Clothing</Link></li>
                <li><Link to="/shop/womens-jewellery">Jewellery</Link></li>
            </ul>
        </nav>
    );
}

export default Categories;