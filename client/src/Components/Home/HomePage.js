import React from 'react';
import LOGO from "./../../assets/images/logo.png";
import mh from "./../../assets/images/Text.png"
import "./HomePage.css"
import { motion } from "framer-motion";

function HomePage() {
  return (
    <>
    {/*      */}
    <div className="Homepage">
     
      <img className="logo-home"  id src={LOGO} alt="Logo" />
      
      <img className='logo-text' src={mh} alt="" />
      <div className="home-text">
        
        <motion.h1
        animate={{ x: [50, 150, 10], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.2,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.5}}
      >
        <p> CODE | COMPETE | CONQUER</p>
      </motion.h1>
      </div>
      
    </div>
    </>
  );
}

export default HomePage;
