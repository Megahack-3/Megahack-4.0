import React from 'react'
import "./Footer.css"
import logo from "./../../assets/images/logo_1.png";
import insta from "./../../assets/images/instagram.png";
import yt from "./../../assets/images/youtube.png";

const Footer = () => {
    return (
        <>
            <section className='Footer'>
                <div className="information">
                    <img src={logo} alt="" />
                    <p className="info">
                        We are the third edition of a hackathon conducted by and for students at St. John College of Engineering and Management (SJCEM). SJCEM aims to encourage technical innovation and highlight students' abilities and skills throughout this hackathon. We intend to attract the finest and brightest students not only from SJCEM as well as from other universities/institutions throughout India. The event provides a chance for hackers to exchange ideas, learn further information, and make connections for future collaborations. We cordially invite all technophiles to this exciting Hackathon...!!!
                    </p>
                </div>

                <div className="footer-contact">
                    <div className="contact">
                        <h6>Contact Us:</h6>
                        <div className="sep"></div>
                        <p><strong>Phone:</strong><a href="tel:+91 9225917698">+91 9225917698</a> / <a href="tel:+91 9765124180">+91 9765124180</a></p>
                        <p><strong>Email:</strong><a href="mailto:megahack@sjcem.edu.in">megahack@sjcem.edu.in</a></p>
                    </div>
                    <div className="social">
                        <a href='https://www.instagram.com/megahack_sjcem/'><img src={insta} alt="" /></a>
                        <a href='https://www.youtube.com/channel/UCitWikt2f1q72Y0VdQiaKMA'><img src={yt} alt="" /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer