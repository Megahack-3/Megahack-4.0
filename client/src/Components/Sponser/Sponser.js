import React from "react";
import "./Sponser.css";
import axure from "../../images/axure.png";
import GDSC from "../../images/GDSC.png";
import rigel from "../../images/Rigalinfo.png";

import janta from "../../images/Janata_Sweets.jpg";
import conceptComputers from "../../images/concept.png";
import vector from "../../images/vectors.png"
import unstop from "../../images/unstop.png"
import hacktoskill from "../../images/hacktoskill.png";
import codedamnd from "../../images/Codedamn.png"
import Branding from "../../images/CatalystArtboard 1@2x-80.jpg"
import Bramha from "../../images/Bramha.png"
import nirlon from "../../images/Nirlon.png"
import Reegal from "../../images/Reegal.png"

const Sponsor = () => {
    const logos = [
        {
            id: 1,
            name: "Hack to Skill",
            image: hacktoskill,
            webUrl: "https://hack2skill.com/",
            header: "Powered By",
            height: 140,
            width: 210
        },
        {
            id: 2,
            name: "Axure",
            image: axure,
            webUrl: "https://www.axure.com/",
            header: "In Kind Partner",
            height: 100,
            width: 210,
        },
        {
            id: 3,
            name: "GDSC",
            image: GDSC,
            webUrl: "https://gdsc.community.dev/st-john-college-of-engineering-management-palghar/",
            header: "Community partner",
            height: 140,
            width: 150,
        },
        {
            id: 4,
            name: "Vector",
            image: vector,
            webUrl: "https://academy.vector.com/de/en/",
            header: "Silver Tier",
            height: 150,
            width: 250
        },
       
        {
            id: 5,
            name: "Rigel",
            image: rigel,
            webUrl: "",
            header: "Internship Partner",
            height: 100,
            width: 210
        },
        
        {
            id: 7,
            name: "concept",
            image: conceptComputers,
            webUrl: "",
            header: "Silver Tier",
            height: 150,
            width: 200
        },
        {
            id: 8,
            name: "Janta",
            image: janta,
            webUrl: "",
            header: "Silver Tier",
            height: 150,
            width: 200
        },
        {
            id: 9,
            name: "Codedamn",
            image: codedamnd,
            webUrl: "https://codedamn.com/",
            header: "In Kind Partner",
            height: 100,
            width: 210,
        },
        {
            id: 10,
            name: "Nirlon",
            image: nirlon,
            webUrl: "https://www.nirlonkitchenware.in/",
            header: "In Kind Partner",
            height: 120,
            width: 210,
        },
        {
            id: 11,
            name: "Branding",
            image: Branding,
            webUrl: "https://www.nirlonkitchenware.in/",
            header: "In Kind Partner",
            height: 120,
            width: 210,
        },
        {
            id: 12,
            name: "Regal",
            image: Reegal,
            webUrl: " ",
            header: "Stationery Partner",
            height: 200,
            width: 210,
        },
        {
            id: 13,
            name: "Bhrama",
            image: Bramha,
            webUrl: "",
            header: "Hydration Partner",
            height: 200,
            width: 290,
        },
        
        
    ];

    const headerColors = {
        // "In Kind Partner": "#ff0000", 
        // "Community partner": "#00ff00", 
        // "Powered By": "#0000ff", 
        // "Internship Partner": "#ff00ff",
        "Silver Tier": "3px solid #C0C0C0",

    };

    const headerBorders = {
        "In Kind Partner": "1px solid #ff0000 ", 
        "Community partner": "1px solid #00ff00", 
        "Powered By": "1px solid #0000ff",
        "Internship Partner": "1px solid #ff00ff" ,
        "Silver Tier": "3px solid #C0C0C0"
    };

    const openLink = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    };

    const renderGrid = (logos, header) => (
        <div>
            <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: 30, color: headerColors[header] }}>{header}</h2>
            <div className="sponsor-grid">
                {logos.map((logo) => (
                    <div key={logo.id} className="sponsor-wrapper" style={{ border: headerBorders[header] }}>
                        <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 25 }}></p>
                        <div className="sponsor-container" style={{ textAlign: "center" }}>
                            <div onClick={() => openLink(logo.webUrl)}>
                                <a href={logo.webUrl} />
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
        </div>
    );

  
    const groupedLogos = logos.reduce((acc, logo) => {
        if (!acc[logo.header]) {
            acc[logo.header] = [];
        }
        acc[logo.header].push(logo);
        return acc;
    }, {});

    return (
        <>
            <h1 id="Sponsors" style={{ textAlign: "center", fontWeight: "bold", fontSize: 50 }}>Our Sponsors</h1>
            {Object.entries(groupedLogos).map(([header, logos]) => renderGrid(logos, header))}
        </>
    );
};

export default Sponsor;
