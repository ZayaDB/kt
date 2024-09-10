import React, { useState } from "react";
import Cover from "./background/Cover";
import Cart1 from "./Card/Card1";
import Card2 from "./Card/Card2";
import "../styles/carousel.css"; // Ensure your styles are defined here
import prev from "../assets/Group34639.svg";
import next from "../assets/Group34640.png";
import Kunji from "./kunji/Kunji";
import Card3 from "./Card/Card3";
import Card4 from "./Card/Card4";
import Card5 from "./Card/Card5";
import Card6 from "./Card/Card6";
import Card7 from "./Card/Card7";

const carouselPages = [
  {
    id: 1,
    content: (
      <div className="page-content">
        {/* First Page Content */}
        {/* <div className="page-grid"> */}
        <Card2 />
        <Cover />
        <Cart1 />
        <Kunji />

        <Card3 />
        {/* </div> */}
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="page-content">
        <div>
          <Card4 />
          <Card5 />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="page-content">
        <Card6 />
        <Card7 />
      </div>
    ),
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === carouselPages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? carouselPages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselPages.map((page) => (
          <div className="carousel-page" key={page.id}>
            {page.content}
          </div>
        ))}
      </div>

      <img
        src={prev}
        alt=""
        className="carousel-control prev"
        onClick={prevSlide}
      />
      <img
        src={next}
        alt=""
        className="carousel-control next"
        onClick={nextSlide}
      />
    </div>
  );
}
