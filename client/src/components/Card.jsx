import { Link } from "react-router-dom";
import styles from "../css/Card.module.css";
import AutoCropImage from "./AutoCropImage";

const Card = ({ product, label, color }) => {
  return (
    <Link
      to={`/shop/${product.category}/${product.id}`}
      state={{ product }}
      className={styles.linkReset}
    >
      <div className={styles.product}>
        {product.rating > 3.9 && label ? <p className={styles.mytag}>POPULAR</p> : null}
        <div className={styles.picContainer} style={{ backgroundColor: color }}>
          <AutoCropImage
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className={styles.pic}
          />
        </div>
        <div className={styles.description}>
          <p className={styles.brand}>{product.brand}</p>
          <p className={styles.title}>{product.title}</p>
          <p className={styles.price}>${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
