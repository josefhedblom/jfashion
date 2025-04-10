import React from "react";
import styles from "../css/Frontpage.module.css";
import { Image } from "react-bootstrap";
import bild1 from "../assets/promo1.png";
import bild2 from "../assets/promo2.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Frontpage() {
  return (
    <div className={styles.mywrap}>
      <Navbar></Navbar>
      <div className={styles.mainContent}>
        <header className={styles.banner}>
          <div className={styles.mask}>
            <h1 className={styles.title}>The art of success</h1>
            <h4 className={styles.test3}>
              Stylish, versatile, and trend-setting fashion platform. Curate your look with modern
              designs, mix and match from seasonal collections, and bring your wardrobe to life with
              timeless and expressive styles.
            </h4>
            <a className={styles.buybutton} href="/shop" role="button">
              Shop now
            </a>
          </div>
        </header>
        <div className={styles.imagecontainer}>
          <img src={bild1}></img>
          <img src={bild2}></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Frontpage;
