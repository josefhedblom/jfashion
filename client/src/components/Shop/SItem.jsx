import styles from '../../css/Spotlight.module.css'
import Card from '../Card';
import { useTopProductsByCategory } from '../../hooks/useTopProductsByCategory';

const SItem = ({category}) => {
    const { products, isLoading, isError } = useTopProductsByCategory(category, 3);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong!</p>;

    return (
        <div id="products" className={styles.productContainer}>
            {products.map((product) => {
            return (
                <Card key={product.id} product={product} label={false}></Card>
            );
            })}
        </div>
    );
}

export default SItem;