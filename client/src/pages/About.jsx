import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../pages.css';

const About = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="pages-container">
                <h1 className="pages-title">About Us</h1>

                <p className="pages-text">
                    We believe in a world where you are free to be <b>YOU</b>, without judgment.
                    <br /><br />
                    A lovely piece of jewelry, the makeup that transforms your look,
                    or something to take your culinary adventures to another level?
                    <br />
                    We shall provide.
                </p>

                <p className="pages-text">
                    JFashion was started by <b>J3RA</b>, the iconic sales company you’ve probably heard of before.
                    <br />
                    Their vision — to bring fashionable items of all categories together — culminates in JFashion.
                </p>

                <div className="image-wrapper">
                    <img
                        src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
                        alt="makeup product"
                        className="custom-image"
                    />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default About;
