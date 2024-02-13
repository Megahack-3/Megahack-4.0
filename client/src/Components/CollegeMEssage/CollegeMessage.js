import React from 'react'
import './CollegeMessage.css'
import aldel from "../../assets/images/aldel.png"
import sjcem from "../../assets/images/SJCEM.png"

const CollegeMessage = () => {
    return (
        <>
            <section className='CollegeMessage'>
                <div className="colleges">
                    <img src={aldel} alt="" />
                    <p>"To impart quality professional education with conducive environment for technology enabled teaching-learning and to nurture socially responsible professionals with enhanced employability skills"</p>
                </div>
                <div className="colleges">
                    <img src={sjcem} alt="" />
                    <p>“Excellence in Engineering Education & Creating Next-Gen Leaders / Managers in the Service of Society”</p>
                </div>

            </section>
        </>
    )
}

export default CollegeMessage