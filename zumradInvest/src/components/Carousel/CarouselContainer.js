import React from "react";
import { Carousel } from "react-bootstrap";
import "./CaruselStyle.css"
import Slide from 'react-reveal/Slide';
import "bootstrap/dist/css/bootstrap.min.css";
import img from "..//..//assets//images//bg-1.jpg";
import img1 from "..//..//assets//images//bg-2.jpg";
import img2 from "..//..//assets//images//bg-4.jpg";
const CarouselContainer = () => {
  return (
    <Carousel  className="b-block">
      <Carousel.Item interval={2000} style={{height: '100vh',   }}>
        <img className="d-block w-100 " src={img} alt="First slide"  style={{ backgroundBlendMode: "darken" }}/>
        <Carousel.Caption>
          <Slide left>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Slide>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{height: '100vh', backgroundBlendMode: "darken"  }}>
        <img className="d-block w-100" src={img1} alt="Second slide" style={{ backgroundBlendMode: "darken" }}  />
        <Carousel.Caption>
          <Slide left>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Slide>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{height: '100vh'}}>
        <img className="d-block w-100 " src={img2} alt="Third slide" style={{ backgroundBlendMode: "darken" }}  />
        <Carousel.Caption>
          <Slide left>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Slide>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
