import React, { useEffect } from 'react'

const Countdown = () => {
    useEffect(() => {
        // Dynamically add the countdown.js script to the document
        const script = document.createElement('script');
        script.src = 'https://cdn.logwork.com/widget/countdown.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up: remove the script from the document when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <a
                href="https://logwork.com/countdown-45gw"
                className="countdown-timer"
                data-style="circles"
                data-timezone="Asia/Kolkata"
                data-textcolor="#000000"
                data-date="2024-03-22 12:00"
                data-background="#ffd700"
                data-digitscolor="#000000"
            >
                Countdown Timer
            </a>
        </div>
    );
}

export default Countdown