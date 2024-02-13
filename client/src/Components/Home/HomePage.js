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
      {/* <motion.img
       id={classes["floater"]}
       initial={{ y: -10 }}
       animate={{ y: 10 }}
       transition={{
         type: "smooth",
         repeatType: "mirror",
         duration: 2,
         repeat: Infinity,
       }}
       src={floaterImg}
       alt="floater"
    /> */}
      <img className='logo-text' src={mh} alt="" />
      <div className="home-text">
        
        <motion.h2
        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.2,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.5}}
      >
        <h2>CODE | COMPETE | CONQUER</h2>
      </motion.h2>
      </div>
      
    </div>
    </>
  );
}

export default HomePage;
