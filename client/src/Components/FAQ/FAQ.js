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
                        <h3 className="faq-title">{item.question}</h3>
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
        question: "Why shouldn't we trust atoms?",
        answer: "They make up everything",
    },
    {
        question: "What do you call someone with no body and no nose?",
        answer: "Nobody knows.",
    },
    {
        question: "What's the object-oriented way to become wealthy?",
        answer: "Inheritance.",
    },
    {
        question: "How many tickles does it take to tickle an octopus?",
        answer: "Ten-tickles!",
    },
    {
        question: "What is: 1 + 1?",
        answer: "Depends on who you are asking.",
    },
    {
        question: "What is: 1 + 1?",
        answer: "Depends on who you are asking.",
    },
    {
        question: "What is: 1 + 1?",
        answer: "Depends on who you are asking.",
    },
    {
        question: "What is: 1 + 1?",
        answer: "Depends on who you are asking.",
    },
    {
        question: "What is: 1 + 1?",
        answer: "Depends on who you are asking.",
    },
];

export default FAQ;