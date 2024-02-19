import React from 'react'
import './../assets/css/Landing.css';

const Landing = () => {
    return (
        <>
            <header>
                <section className='Navbar'>
                    <div className="Navbar-logo">
                        <img src="" alt="Megahack4.0 Logo" />
                    </div>
                    <div className="Navbar-menu">
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Speaker</a></li>
                            <li><a href="">Schedule</a></li>
                            <li><a href="">Gallery</a></li>
                            <li><a href="">Sponsors</a></li>
                            <li><a href="">FAQs</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Register</a></li>
                        </ul>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Landing