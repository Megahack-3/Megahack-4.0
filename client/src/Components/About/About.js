import React from 'react'
import "./About.css"
import { SectionWrapper } from "../hoc/SectionWrapper.js";

const About = () => {
    return (
        <>
            <section className='About'>
                <div className="about-event about-data">
                    <h3>About The Event</h3>
                    <p>We are the third edition of a hackathon conducted by and for students at St. John College of Engineering and Management (SJCEM). SJCEM aims to encourage technical innovation and highlight students' abilities and skills throughout this hackathon. We intend to attract the finest and brightest students not only from SJCEM as well as from other universities/institutions throughout India. The event provides a chance for hackers to exchange ideas, learn further information, and make connections for future collaborations. We cordially invite all technophiles to this exciting Hackathon...!!!</p>
                </div>
                <div className="where about-data">
                    <h3>Where</h3>
                    <p>In-person at St. John College of Engineering and Management Palghar, Maharashtra</p>
                </div>
                <div className="when about-data">
                    <h3>When</h3>
                    <p>22 March and 23 March, 2024.</p>
                </div>
            </section>
        </>
    )
}

export default About