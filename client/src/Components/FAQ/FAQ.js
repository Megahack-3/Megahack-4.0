import React, { useState } from "react";
import angleDown from  "../../assets/css/angleDown.svg"
import angleUp from "../../assets/css/angleUp.svg"
import "./FAQ.css";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isCollapsed, setIsCollapsed] = useState(
        Array(FAQData.length).fill(false)
    );

    const toggleFAQ = (index) => {
        const updatedCollapsedState = [...isCollapsed];
        updatedCollapsedState[index] = !updatedCollapsedState[index];
        setActiveIndex(activeIndex === index ? null : index);
        setIsCollapsed(updatedCollapsedState);
    };

    return (
        <>
            <h1>Frequently Asked Questions</h1>
            <div className="faq-container">
                {FAQData.map((item, index) => (
                    <div
                        className={`faq ${
                            activeIndex === index ? "active" : ""
                        }`}
                        key={index}
                    >
                        <h2 className="faq-title">{item.question}</h2>
                        <p className="faq-text">{item.answer}</p>
                        <button
                            className="faq-toggle"
                            onClick={() => toggleFAQ(index)}
                        >
                            <img
                                src={isCollapsed[index] ? angleUp : angleDown}
                                alt={isCollapsed[index] ? "Collapse" : "Expand"}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

const FAQData = [
    {
        question: "What's so special about MegaHack 4.0?",
        answer: "Backed by the experienced core team, we aim to make this event an inclusive one for each and every hacker out there. One of the highest Prize Amounts for any Hackathon in Mumbai University and multiple swag bags and goodies for all participants. ",
    },
    {
        question: "	Who can participate?",
        answer: "Anyone who is a student (PGs/Bachelors/UGs/Diploma) with a valid Identity Proof of the same can enter MegaHack 4.0."
       
    },
    // {
    //     question: "3.	How much do we charge?",
    //     answer: "Registration fees are INR 500 per team. We believe in the culture of innovation and rewards for those who want to change the world! You just have to hack and change the world!.",
    // },
    //  {
    //     question: "Are there any problem statements for the hackathon?",
    //     answer: "We believe being forced to build on problem statements limits creativity and participants should have the freedom to express their creativity. MegaHack 4.0 vision coincides with the #Vikasit Bharat Mission. Participants are requested to submit their problem statements while registering. Bonus points for problem statements in the domains of Healthcare, Education, Agriculture and Rural Development, Humanitarian help, Security and Surveillance",
    // },
    {
        question: "It’s my first hackathon. Can I participate?",
        answer: "Of course you can! Experience does not matter till the time you have a zest to change the world. Newbies are most welcome!",
    },
    {
        question: "What are the selection criteria ?",
        answer: "We are looking for people who innovate and can build crazy, unique solutions to real-world problems. Tell us why you want to be a part of MegaHack 4.0, any accomplishments you are proud of and anything else which could strengthen your application.",
    },
    {
        question: "What is the Judging Criteria?",
        answer: "The judges will analyze and evaluate all projects submitted by the teams based on Concept, Complexity, Development, Design and Presentation.",
        
    },
    // {
    //     question: "Where I can find the detailed Schedule?",
    //     answer: " MegaHack 4.0 will start from 22nd March 10:00 am to 23rd March 1:00 pm. Detailed Schedule will be mailed to the shortlisted participants.(",
    // },
    {
        question: "How long can I work on the project?",
        answer: "All participants can work for 24 hours on their projects. The project proposals would be submitted before the Hackathon, and the entire event is only for the product development.",
    },
    {
        question: "How many members are required in a team?",
        answer: "No one likes to be a loner. You can have a team of 3-4 members.",
    },
    {
        question: "Do I keep working throughout the event?",
        answer: "Of course not. MegaHack 4.0 Team does not like to make Jack a dull boy. We have numerous fun-filled mini-events and recreational activites in the bag for you.",
    },
    {
        question: "What if I don't know how to code?",
        answer: "Interest in learning and working with technology is much more important than your current experience level. No experience is needed — whether you're a coder, an artist, a designer, or a writer, you'll get a chance to work with various mentor, interact with companies, and learn     alongside fellow participants.",
    },
    {
        question: "Are we allowed to build on past projects?",
        answer: "You cannot work, copy, or iterate on past projects. Using your APIs or third-party APIs is allowed, as long as the project is entirely new.",
    },
    {
        question: "Who are the judges for the event?",
        answer: "Only the best for you. The panel of judges includes experienced professionals from various fields - both education and industry.",
    },
    {
        question: "What is the Code of Conduct?",
        answer: "MegaHack 4.0 values the importance of a safe and all-inclusive space because of quality. We welcome students from all backgrounds. Anyone attending must adhere to our Code of Conduct.",
    },
    {
        question: "Is MegaHack 4.0 an online event or offline?",
        answer: "MegaHack 4.0 will be a offline in-person event in SJCEM campus.",
    }

];

export default FAQ;