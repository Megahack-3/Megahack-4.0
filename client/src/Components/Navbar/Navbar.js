import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../images/MEGA HACK 4.0.png";
import logo from "./../../assets/images/logo4.png";
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const scrollToSection = (id) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            smoothScroll(targetY);
        }
    };

    const smoothScroll = (targetY) => {
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        const duration = 2000; 
        let start;
        setClick(false); 

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutQuad(progress, startY, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

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
                    <a href="/" onClick={() => scrollToSection("home")}>Home</a>
                </li>
                <li className="nav-item">
                    <a href="#About" onClick={() => scrollToSection("About")}>About</a>
                </li>
                <li className="nav-item">
                    <a href="#event" onClick={() => scrollToSection("event")}>Speaker</a>
                </li>
                <li className="nav-item">
                    <a href="#Gallery" onClick={() => scrollToSection("Gallery")}>Gallery</a>
                </li>
                <li className="nav-item">
                    <a href="#Sponsors" onClick={() => scrollToSection("Sponsors")}>Sponsors</a>
                </li>
                <li className="nav-item">
                    <a href="#faqs" onClick={() => scrollToSection("faqs")}>FAQs</a>
                </li>
                <li className="nav-item">
                    <a href="#Contact" onClick={() => scrollToSection("Contact")}>Contact</a>
                </li>
                <li className="nav-item">
                    <button className="signin-button"><a href="https://hack2skill.com/hack/megahack">Register</button>
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
export default Navbar;
