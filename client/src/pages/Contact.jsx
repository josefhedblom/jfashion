import '../pages.css';

const Contact = () => {
    return (
        <div className="pages-container">
            <h1 className="pages-title">Contact Us</h1>
            <h2><br /></h2>

            <p className="pages-text">
                Thought you were a gold, but realized silver was yours to wear? Fret not!
                <br />
                If you need to return any item, you're free to do so <u>within 60 days</u> of receiving it.
                <br /><br />
                Please email us at <b>returns@jfashion.com</b> and let us know:
                <ul>
                    What is the item? <br />
                    Who are you? (Name and address)
                </ul>
            </p>

            <p className="pages-text">
               <br /> <br />Just want to say hi? Our customer service team is at <b>hello@jfashion.com</b>.
            </p>

            <p className="pages-text">
                <br />Prefer the old-fashioned kind of mail? Send it to: <br />
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
    );
};

export default Contact;