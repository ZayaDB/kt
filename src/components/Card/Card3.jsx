import React, { useState, useEffect } from "react";
import "../../styles/card3.css";
import image1 from "../../assets/image74.png";
import image2 from "../../assets/image71.png";
import image3 from "../../assets/STEP=3.png";

export default function Card3() {
  const slides = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  // 자동 슬라이드 효과를 위한 useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3초마다 슬라이드 전환

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, [slides.length]);

  return (
    <>
      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}
