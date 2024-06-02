import React from "react";
import { Carousel } from "antd";
import './Herobanner.css';
import one from './img1.jpg';
import two from './img2.jpg';
import three from './img3.jpg';



function HeroBanner() {
    const bannerImgs =[
      one,
      two,
      three
    ]
  const captions = [
    "Women's Linen Cotton Shirts, fully, freely, and for longer.",
    "T-shirts feature the youth, pursuing a future for clothes.",
    "Enthusiasm, Courage, Youth. Enjoy your LifeWear. "
  ];
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-content">
          <Carousel autoplay >
            {bannerImgs.map((img, index) => (
              <div className="banner-item" key={index}>
                <img src={img} alt="banner" />
                <div className="caption">{captions[index]}</div> 
                <button className="banner-button">Shop Now</button>  
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;