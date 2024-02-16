import React from "react";
import "./Sponser.css";
import axure from "../../images/axure.png"
import GDSC from "../../images/GDSC.png"
import hacktoskill from "../../images/hacktoskill.jpg"
import { SectionWrapper } from "../hoc";
const Sponsor = () => {
    const logos = [
        {
            id: 1,
            name: "Axure",
            image: axure,
            webUrl: "https://www.axure.com/",
        },
        {
            id: 2,
            name: "GDSC",
            image: GDSC,
            webUrl: "https://gdsc.community.dev/st-john-college-of-engineering-management-palghar/",
        },
        {
            id: 3,
            name: "Hach to Skill",
            image: hacktoskill,
            webUrl: "https://hack2skill.com/",
        },
        // {
        //     id: 4,
        //     name: "Logo 4",
        //     image: "https://i.ibb.co/N92D9G3/Screenshot-2020-10-20-My-Brand-New-Logo-My-Brand-New-Logo-Logo-design-proposals-removebg-preview.png",
        //     webUrl: "",
        // },
        // {
        //     id: 5,
        //     name: "Logo 5",
        //     image: "https://i.ibb.co/N92D9G3/Screenshot-2020-10-20-My-Brand-New-Logo-My-Brand-New-Logo-Logo-design-proposals-removebg-preview.png",
        //     webUrl: "",
        // },
        // {
        //     id: 6,
        //     name: "Logo 3",
        //     image: "https://i.ibb.co/N92D9G3/Screenshot-2020-10-20-My-Brand-New-Logo-My-Brand-New-Logo-Logo-design-proposals-removebg-preview.png",
        //     webUrl: "",
        // },
        // {
        //     id: 7,
        //     name: "Logo 3",
        //     image: "https://i.ibb.co/N92D9G3/Screenshot-2020-10-20-My-Brand-New-Logo-My-Brand-New-Logo-Logo-design-proposals-removebg-preview.png",
        //     webUrl: "",
        // },
    ];
    const openLink = (url) => {
        if (url) {
            window.open (url,"_blank");
        }
    };

    const handleLogoHover = (event) => {
        event.target.classList.toggle("hovered");
    };

    return (
<> 
       <h1 id="Sponsors"> Our Sponsors</h1>
        <div className="sponsor-grid">
           
            {logos.map((logo) => (
                <div
                    key={logo.id}
                    className="sponsor-container"
                    onMouseEnter={handleLogoHover}
                    onMouseLeave={handleLogoHover}
                    onClick={() => openLink(logo.webUrl)}
                >
                    <a href={logo.webUrl}></a>
                    <img src={logo.image} alt={logo.name} className="sponsor" />
                    <div className="sponsor-text">{logo.name}</div>
                </div>
            ))}
        </div>
        </>
    );
};

export default  SectionWrapper(Sponsor,"sponser");