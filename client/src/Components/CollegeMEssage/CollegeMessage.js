import React from 'react';
import './CollegeMessage.css';
import aldel from '../../assets/images/aldel.png';
import sjcem from '../../assets/images/SJCEM.png';


const CollegeMessage = () => {
    
    return (
        <section className='CollegeMessage'>
            <div className='colleges'>
                <a href="https://www.aldel.in/" target="_blank" rel="noopener noreferrer" className="college-link">
                    <img src={aldel} alt='Aldel College' />
                    <p>"To impart quality professional education with a conducive environment for technology-enabled teaching-learning and to nurture socially responsible professionals with enhanced employability skills"</p>
                </a>
            </div>
            <div className='colleges'>
                <a href="https://www.sjcem.edu.in/" target="_blank" rel="noopener noreferrer" className="college-link">
                    <img src={sjcem} alt='SJCEM College' />
                    <p>“Excellence in Engineering Education & Creating Next-Gen Leaders / Managers in the Service of Society”</p>
                </a>
            </div>
        </section>
    );
};

export default CollegeMessage;
