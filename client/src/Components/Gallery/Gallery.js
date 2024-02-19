import React from 'react';
import "./Gallery.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import FirstImage from "../../images/FIrst.jpg"
import SecondImage from "../../images/Two.jpg"
import ThirdImage from "../../images/Three.jpg"
import FouthImage from "../../images/Four.jpg"
import FiveImage from "../../images/Five.jpg"
import mg1 from "../../images/Mg1.png"
import mg11 from "../../images/mg11.png" 
import mg3 from "../../images/mg3.png"
import mg31 from "../../images/mg31.png"
import mg32 from "../../images/mg32.png"
import team from "../../images/team.png"
import winner from "../../images/winners.png"
import winner2 from "../../images/winners2.png"
import winner3 from "../../images/winners3.png"
import session1 from "../../images/session1.png"
import session2 from "../../images/session2.png"
import session3 from "../../images/session3.png"
import Inaugral from "../../images/Inaugral.png"
import team3 from "../../images/team3.png"
import session4 from "../../images/session4.png"
import winner4 from "../../images/winner4.png"




const Gallery = () => {
  const images = [ mg1,mg11,mg3,Inaugral,session1,session2,session3,session4,winner,winner2,winner3,winner4,team,team, mg32,mg31,SecondImage,ThirdImage,FouthImage,FiveImage];
  
  return (
    <>
    <h1>Gallery</h1>
    <div className="App" id='Gallery' style={{ marginTop: '15px' }}>
    <Carousel className="crsl" autoPlay centerMode interval={1000} infiniteLoop style={{ width: '80%', margin: 'auto' }}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  </div>
  </>
);
};
export default Gallery;
