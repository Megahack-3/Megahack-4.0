import React from 'react'
import './Prize.css'


const Prize = () => {
    return (
        <>
            <section className='Prize'>
                <h4>PRIZES</h4>
                <p>Earn Your Own Victory</p>
                <div className="seprater"></div>
                <div className="Total">
                    <div className="amounts">
                        <p id='prize' className="des">Prize Worth</p>
                        <p id='prize'className="pisa">₹1,00,000/-</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Prize