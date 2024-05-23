import React from "react";
import { Carousel } from "antd";
import './Herobanner.css';


function HeroBanner() {
    const bannerImgs =[
      "https://www.uniqlo.cn/public/image/L1/2024/May/0517/5-T1.jpg",
      "https://im.uniqlo.com/global-cms/spa/res54edad86017b2a3299f3cb6634cb39c5fr.jpg",
        "https://im.uniqlo.com/global-cms/spa/res95f697cbf83fe768c79b66be8a3f23b9fr.jpg"
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