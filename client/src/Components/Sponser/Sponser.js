import React from "react";
import "./Sponser.css";
import axure from "../../images/axure.png";
import GDSC from "../../images/GDSC.png";
import hacktoskill from "../../images/hacktoskill.png";
import { SectionWrapper } from "../hoc";

const Sponsor = () => {
    const logos = [
        {
            id: 1,
            name: "Axure",
            image: axure,
            webUrl: "https://www.axure.com/",
            header: "In Kind Partner",
            height: 100, 
            width: 200, 
        },
        {
            id: 2,
            name: "GDSC",
            image: GDSC,
            webUrl: "https://gdsc.community.dev/st-john-college-of-engineering-management-palghar/",
            header: "Community partner",
            height: 140, 
            width: 150, 
        },
        {
            id: 3,
            name: "Hack to Skill",
            image: hacktoskill,
            webUrl: "https://hack2skill.com/",
            header: "Platform Partner",
            height: 100, 
            width: 175, 
        },
    ];

    const openLink = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (

        <>
            <h1 id="Sponsors" style={{ textAlign: "center", color: "black", fontWeight: "bold",fontSize:50 }}>Our Sponsors</h1>
            <div className="sponsor-grid">
                {logos.map((logo) => (
                    <div key={logo.id} className="sponsor-wrapper">
                        <p style={{ textAlign: "center", color: "black", fontWeight: "bold",fontSize:25 }}>{logo.header}</p>
                        <div className="sponsor-container" style={{ textAlign: "center" }}>
                            <div onClick={() => openLink(logo.webUrl)}>
                                <a href={logo.webUrl}></a>
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="sponsor"
                                    style={{ height: logo.height, width: logo.width }} 
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </>
    );
};

export default SectionWrapper(Sponsor, "sponser");
