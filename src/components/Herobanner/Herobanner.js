import React from "react";
import "./Herobanner.css";
import { Carousel } from "antd";


function Herobanner() {
    const bannerImgs =[
        "https://gw.alicdn.com/imgextra/i3/O1CN01Am8Sra21Zaice06ax_!!6000000006999-2-tps-1130-500.png_570x10000.jpg_.webp",
        "https://gw.alicdn.com/tps/TB1Lw9SLVXXXXajaXXXXXXXXXXX-1130-500.jpg_570x10000Q75.jpg_.webp",
        "https://gw.alicdn.com/tps/i4/i3/6000000003435/O1CN01fS1G4M1bFHA2rvIwi_!!6000000003435-0-ald.jpg_570x10000Q75.jpg_.webp"
    ]

  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-content">
          <Carousel autoplay arrows>
            {bannerImgs.map((img, index) => (
              <div className="banner-item" key={index}>
                <img src={img} alt="banner" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Herobanner;
