import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <>
        <div id='Contact'></div>
            <section className='ContactUs'>
                <h4>CONTACT US</h4>
                <p>Reach Out to Us Anytime...</p>
                <div className="seprater"></div>
                <div className="contact-details">
                    <div className="contact-box phone">
                        <h5>CONTACT NUMBER</h5>
                        <p><a href="tel:+91 9225917698">+91 9225917698</a> (Mr. Shubham Raut)</p>
                        <p><a href="tel:+91 9765124180">+91 9765124180</a> (Mr. Rohit Mule)</p>
                    </div>
                    <div className="contact-box email">
                        <h5>Email</h5>
                        <p><a href="mailto:megahack@sjcem.edu.in">megahack@sjcem.edu.in</a></p>
                    </div>
                </div>
                <div className="form">
                    <div className="line two-row">
                        <div className="intag">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="Name" id="Name" />
                        </div>
                        <div className="intag">
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="Email" id="Email" />
                        </div>
                    </div>
                    <div className="intag">
                        <label htmlFor="Mobile">Mobile</label>
                        <input type="text" name="Mobile" id="Mobile" />
                    </div>
                    <div className="intag">
                        <label htmlFor="Query">Query</label>
                        <input type="text" name="Query" id="Query" />
                    </div>
                    <div className="intag">
                        <label htmlFor="Message">Message</label>
                        <textarea name="Message" id="Message" cols="30" rows="4"> </textarea>
                    </div>
                    <button>Submit</button>
                </div>
            </section>
        </>
    )
}

export default ContactUs