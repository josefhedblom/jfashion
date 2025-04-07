import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../pages.css';

const Contact = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="pages-container">
                <h1 className="pages-title">Contact Us</h1>

                <p className="pages-text">
                    Thought you were a gold, but realized silver was yours to wear? Fret not!
                    <br />
                    If you need to return any item, you're free to do so <u>within 60 days</u> of receiving it.
                    <br /><br />
                    Please email us at <b>returns@jfashion.com</b> and let us know:
                    <ul>
                        <li>What is the item?</li>
                        <li>Who are you? (Name and address)</li>
                    </ul>
                </p>

                <p className="pages-text">
                    Just want to say hi? Our customer service team is at <b>hello@jfashion.com</b>.
                </p>

                <div className="image-wrapper">
                    <img
                        src="https://cdn.dummyjson.com/products/images/groceries/Lemon/thumbnail.png"
                        alt="lemon product"
                        className="custom-image"
                    />
                </div>

                <p className="pages-text">
                    Prefer old-school mail? Send it to:
                    <br />
                    <b>JFashion</b>
                    <br />
                    21 Jewel Street
                    <br />
                    SW4 0SB
                    <br />
                    London
                </p>
            </div>
            <Footer></Footer>        
            </>
    );
};

export default Contact;