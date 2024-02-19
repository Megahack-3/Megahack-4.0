import React from 'react';
import LOGO from "./../../assets/images/logo.png";
import mh from "./../../assets/images/Text.png";
import "./HomePage.css";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc/SectionWrapper.js";

function HomePage() {
  const bgVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const contentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 2, duration: 2, ease: "easeInOut" } },
  };

  const logoHomeVariants = {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeInOut" } },
  };

  const logoTextVariants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1.5, ease: "easeInOut" } },
  };

  return (
    <motion.div className="Homepage" variants={bgVariants} initial="initial" animate="animate">

      <motion.img
        className="logo-home"
        src={LOGO}
        alt="Logo"
        variants={logoHomeVariants}
        initial="initial"
        animate="animate"
      />
      
      <motion.img
        className="logo-text"
        src={mh}
        alt=""
        variants={logoTextVariants}
        initial="initial"
        animate="animate"
      />
      
      <motion.div className="home-text" variants={contentVariants}>
        <motion.h1
          animate={{ x: [50, 150, 10], opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 1,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.5 }}
        >
          <p> CODE | COMPETE | CONQUER</p>
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
