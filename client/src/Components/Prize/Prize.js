import React from 'react'
import './Prize.css'
import { SectionWrapper } from "../hoc/SectionWrapper.js";

const Prize = () => {
    return (
        <>
            <section className='Prize'>
                <h4>PRIZES</h4>
                <p>Earn Your Own Victory</p>
                <div className="seprater"></div>
                <div className="Total">
                    <div className="amounts">
                        <p className="des">FIRST PRIZE</p>
                        <p className="pisa">Rs. 35,000</p>
                    </div>
                    <div className="amounts">
                        <p className="des">Second PRIZE</p>
                        <p className="pisa">Rs. 25,000</p>
                    </div>
                    <div className="amounts">
                        <p className="des">Third PRIZE</p>
                        <p className="pisa">Rs. 15,000</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Prize