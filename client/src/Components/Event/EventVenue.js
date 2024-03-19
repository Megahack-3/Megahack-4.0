import React from 'react'
import "./Event.css"


const EventVenue = () => {
    return (
        <>
            <section className='Event'>
                <div className=" event-content venue">
                    <h3>EVENT VENUE</h3>
                    <p>St. John College of Engineering and Management, Palghar, Maharashtra</p>
                    <div className="sep"></div>
                </div>
                <div className="google-map-code">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.154502250581!2d72.78131921475183!3d19.706045236986512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71c92fbd91e67%3A0x2a3ce68676417a45!2sSt.%20John%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1575310221011!5m2!1sen!2sin&t=h"
                    width="100%"
                    height="300"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                />


                </div>
            </section>
        </>
    )
}

export default EventVenue;