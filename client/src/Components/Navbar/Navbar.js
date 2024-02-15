import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../images/MEGA HACK 4.0.png";
import logo from "./../../assets/images/logo4.png";
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="logo">
            <div className="main-logo">
                    <img className="logo-image" src={Logo} alt="" />
                    <img className="text-image" src={logo} alt="" />
                    </div>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#About">About</a>
                </li>
                <li className="nav-item">
                    <a href="#Speaker">Speaker</a>
                </li>
                <li className="nav-item">
                    <a href="/">Gallery</a>
                </li>
                <li className="nav-item">
                    <a href="#Sponsors">Sponsors</a>
                </li>
                <li className="nav-item">
                    <a href="#FAQs">FAQs</a>
                </li>
                <li className="nav-item">
                    <a href="#Contact">Contact</a>
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