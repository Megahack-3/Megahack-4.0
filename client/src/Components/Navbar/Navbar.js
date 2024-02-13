import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../images/MEGA HACK 4.0.png";
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/">About</a>
                </li>
                <li className="nav-item">
                    <a href="/">Speaker</a>
                </li>
                <li className="nav-item">
                    <a href="/">Gallery</a>
                </li>
                <li className="nav-item">
                    <a href="/">Sponsors</a>
                </li>
                <li className="nav-item">
                    <a href="/">FAQs</a>
                </li>
                <li className="nav-item">
                    <a href="/">Contact</a>
                </li>
                <li className="nav-item">
                    <button className="signin-button">Register</button>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={30} style={{ color: "#f8f8f8" }} />
                ) : (
                    <FaBars size={30} style={{ color: "#f8f8f8" }} />
                )}
            </div>
        </nav>
    );
};

export default Navbar;