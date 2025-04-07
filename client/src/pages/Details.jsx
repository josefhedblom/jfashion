import Breadcrumbs from "../components/Breadcrumbs";
import Categories from "../components/Shop/Categories";
import Spotlight from "../components/Shop/Spotlight";
import styles from "../css/Details.module.css";
import { useLocation } from "react-router-dom";
import AutoCropImage from "../components/AutoCropImage";
import Navbar from "../components/Navbar";
import OrderModal from "../components/OrderModal";
import { useState } from "react";

const Product = () => {
  const { state } = useLocation();
  const { product } = state || {};
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.mainContent}>
        <Breadcrumbs></Breadcrumbs>
        <Categories></Categories>

        {showModal && (
          <OrderModal
            product={product}
            onClose={() => {
              setShowModal(false);
              setShowConfirmation(false);
            }}
            showConfirmation={showConfirmation}
            setShowConfirmation={setShowConfirmation}
          />
        )}

        <div className={styles.details}>
          <div className={styles.left}>
            <div className={styles.picContainer}>
              <AutoCropImage
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
                className={styles.pic}
              />
            </div>
          </div>
          <div className={styles.right}>
            <h1 className={styles.brand}>{product.brand}</h1>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>${product.price}</p>
            <button className={styles.buyBtn} onClick={() => setShowModal(true)}>
              Buy
            </button>
            <p className={styles.description}>{product.description}</p>
          </div>
        </div>

        <div className={styles.bestContainer}>
          <h1 className={styles.spotTitle}>Others also viewed</h1>
        </div>

        <Spotlight></Spotlight>
      </div>
    </>
  );
};

export default Product;
