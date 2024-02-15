import React from 'react';
import "./Gallery.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FirstImage from "../../images/FIrst.jpg"
import SecondImage from "../../images/Two.jpg"
import ThirdImage from "../../images/Three.jpg"
import FouthImage from "../../images/Four.jpg"
import FiveImage from "../../images/Five.jpg"
import { SectionWrapper } from "../hoc/SectionWrapper.js";

const Gallery = () => {
  const images = [FirstImage, SecondImage,ThirdImage,FouthImage,FiveImage];
  
  return (
    <>
    <h1>Gallery</h1>
    <div className="App" style={{ marginTop: '15px' }}>
    <Carousel className="crsl" autoPlay centerMode interval={1000} infiniteLoop>
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
