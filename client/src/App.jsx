import { Route, Routes } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import Shop from "./pages/Shop";
import Product from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:category" element={<Products />} />
      <Route path="/shop/:category/:productId" element={<Product />} />
    </Routes>
  );
}

export default App;
