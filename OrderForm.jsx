import { useState } from "react";

export default function OrderForm() {
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
            newErrors.phone = "Telefonnumret får bara innehålla siffror, parenteser, bindestreck och mellanslag.";
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
            alert("Beställning skickad!");
            // Here you can send data to backend or show confirmation
        }
    };

    return (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold">Beställningsformulär</h2>

      <div>
        <label>Namn</label>
        <input
            type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    className="w-full border p-2 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label>E-post</label>
        <input
            type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="w-full border p-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label>Telefonnummer</label>
        <input
            type="text"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    className="w-full border p-2 rounded"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div>
        <label>Gatuadress</label>
        <input
            type="text"
    name="street"
    value={formData.street}
    onChange={handleChange}
    className="w-full border p-2 rounded"
            />
            {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}
      </div>

      <div>
        <label>Postnummer</label>
        <input
            type="text"
    name="zip"
    value={formData.zip}
    onChange={handleChange}
    className="w-full border p-2 rounded"
            />
            {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
      </div>

      <div>
        <label>Ort</label>
        <input
            type="text"
    name="city"
    value={formData.city}
    onChange={handleChange}
    className="w-full border p-2 rounded"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </div>

      <button
            type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
            Beställ
            </button>
    </form>
  );
}
