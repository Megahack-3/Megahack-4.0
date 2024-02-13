import React from 'react';
import LOGO from "./../../assets/images/logo.png";
import mh from "./../../assets/images/Text.png"
import "./HomePage.css"

function HomePage() {
  return (
    <div className="Homepage">
      <img className="logo-home" src={LOGO} alt="Logo" />
      <img className='logo-text' src={mh} alt="" />
      <div className="home-text">
        <h2>CODE | COMPETE | CONQUER</h2>
      </div>
    </div>
  );
}

export default HomePage;
