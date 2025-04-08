import styles from "../css/Spotlight.module.css";
import Card from "./Card";

const Top = ({ products }) => {
  return (
    <div id="products" className={styles.productContainer}>
      {products.map((product) => {
        return <Card key={product.id} product={product} label={false} color="#eefad7"></Card>;
      })}
    </div>
  );
};

export default Top;
