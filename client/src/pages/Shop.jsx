import Breadcrumbs from "../components/Breadcrumbs";
import Banner from "../components/Shop/Banner";
import Categories from "../components/Shop/Categories";
import styles from "../css/Shop.module.css";
import heartIcon from "../assets/heart.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bestsellers from "../components/Bestsellers";

const Shop = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.mainContent}>
        <Banner></Banner>
        <h1 className={styles.current}>Products</h1>
        <Breadcrumbs></Breadcrumbs>
        <Categories></Categories>
        <div className={styles.bestContainer}>
          <h1 className={styles.spotTitle}>Bestsellers</h1>
          <img src={heartIcon} alt="heart" className={styles.heartIcon} />
        </div>
        <Bestsellers></Bestsellers>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Shop;
