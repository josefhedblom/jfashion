import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../pages.css";
import styles from "../css/Content.module.css";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="pages-container">
        <div className={styles.about}>
          <div className={styles.mask}>
            <h1 className="pages-title">About Us</h1>
          </div>
        </div>

        <p className="pages-text">
          We believe in a world where you are free to be <b>YOU</b>, without judgment.
          <br />
          <br />
          A lovely piece of jewelry, the makeup that transforms your look, or something to take your
          culinary adventures to another level?
          <br />
          We shall provide.
        </p>

        <p className="pages-text">
          JFashion was started by <b>J3RA</b>, the iconic sales company you’ve probably heard of
          before.
          <br />
          Their vision — to bring fashionable items of all categories together — culminates in
          JFashion.
        </p>

        <p className="pages-text">
          <h1>
            <br />
            <br />
          </h1>
          <h3>This is J3RA:</h3>
          <b>Johan Eriksson</b> - Beauty Consultant <br />
          <b>Josef Hedblom</b> - Special Frontender Ops <br />
          <b>Jonathan Cederlund</b> - Bringer Of Coffee <br />
          <b>Rickard Borchers</b> - Fragnance Sampler Extra-ordinarie
          <br />
          <b>Alex Skärberg</b> - Fashion Statements Specialist
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
