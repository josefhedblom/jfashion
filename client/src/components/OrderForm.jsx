import { useState } from "react";
import styles from "../css/OrderForm.module.css";
export default function OrderForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    zip: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (formData.name.length < 2 || formData.name.length > 50) {
      newErrors.name = "Namn måste vara mellan 2 och 50 tecken.";
    }

    if (!formData.email.includes("@") || formData.email.length > 50) {
      newErrors.email = "Ogiltig e-postadress.";
    }

    const phonePattern = /^[0-9()\-\s]+$/;
    if (!phonePattern.test(formData.phone) || formData.phone.length > 50) {
      newErrors.phone =
        "Telefonnumret får bara innehålla siffror, parenteser, bindestreck och mellanslag.";
    }

    if (formData.street.length < 2 || formData.street.length > 50) {
      newErrors.street = "Gatuadress måste vara mellan 2 och 50 tecken.";
    }

    const zipPattern = /^[0-9]{5}$/;
    if (!zipPattern.test(formData.zip)) {
      newErrors.zip = "Postnummer måste vara exakt 5 siffror.";
    }

    if (formData.city.length < 2 || formData.city.length > 50) {
      newErrors.city = "Ort måste vara mellan 2 och 50 tecken.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSuccess();
      // Here you can send data to backend or show confirmation
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <h2 className={styles.formTitle}>Beställningsformulär</h2>

      <div className={styles.grid}>
        <div className={styles.formGroup}>
          <label>Namn</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>E-post</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Telefonnummer</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Gatuadress</label>
          <input type="text" name="street" value={formData.street} onChange={handleChange} />
          {errors.street && <p className={styles.error}>{errors.street}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Postnummer</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
          {errors.zip && <p className={styles.error}>{errors.zip}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Ort</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
          {errors.city && <p className={styles.error}>{errors.city}</p>}
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        Beställ
      </button>
    </form>
  );
}
