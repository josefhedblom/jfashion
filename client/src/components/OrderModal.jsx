import OrderForm from "./OrderForm";
import styles from "../css/OrderForm.module.css";

const OrderModal = ({ product, onClose, showConfirmation, setShowConfirmation }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Stäng">
          &times;
        </button>

        {!showConfirmation ? (
          <OrderForm
            onSuccess={() => {
              setShowConfirmation(true);
            }}
          />
        ) : (
          <div className={styles.modalConfirmation}>
            <h2>Tack för din beställning!</h2>
            <p>Vi behandlar din beställning och kontaktar dig snart.</p>
            <h4 className={styles.brandConfirmation}>{product.brand}</h4>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;
