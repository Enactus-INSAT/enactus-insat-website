import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectsCard from "./ProjectsCard";
import { useSwiper } from "swiper/react";
import data from "../Assets/data/ProjectsCards.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles/Projects.css";
import ArrowRight from "../Assets/icons/projectArrow-right.svg";
import ArrowLeft from "../Assets/icons/projectArrow-left.svg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Projects() {
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    console.log(window);
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  const responsive = {
    slidesNbr: width < 850 ? 1 : 3,
  };
  const [index, setIndex] = useState(0);

  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState(
    Array.from({ length: 4 }).map((_, index) => `Project ${index + 1}`)
  );

  const slideNext = () => {
    swiperRef.slideNext();
  };
  const slidePrev = () => {
    swiperRef.slidePrev();
  };

  useEffect(() => {}, [index]);

  const pagination = slides.map((_, i) => {
    return (
      <div
        className={`Projects_PaginationCercle ${
          i === index ? "Projects_PaginationCercleSelected" : ""
        }`}
        key={`Pagination ${i}`}
      ></div>
    );
  });

  const cards = slides.map((slideContent, index) => (
    <SwiperSlide key={slideContent} virtualIndex={index}>
      {({ isActive }) => (
        <ProjectsCard
          swiper={swiperRef}
          isActive={isActive}
          data={data[index]}
        ></ProjectsCard>
      )}
    </SwiperSlide>
  ));
  const setSwiperRefHandler = () => {
    if (!swiperRef?.realIndex) {
      if (swiperRef?.realIndex === 0) {
        return setIndex(0);
      }
      return setIndex(1);
    }
    console.log(swiperRef);
    setIndex(swiperRef.realIndex);
  };
  return (
    <>
      <div className="projects-section-heading-container">
        <div className="activities-section-heading">
          <div className="a-h-line"></div>
          <div className="section-heading">OUR PROJECTS</div>
          <div className="a-h-line"></div>
        </div>
      </div>
      <div className="Projects__Wrapper">
        <div className="Projects__Btn--Container">
          {" "}
          <img
            className="Projects__Btn Projects__BtnLeft"
            src={ArrowLeft}
            onClick={() => slidePrev()}
            alt=""
          />
          <img
            className="Projects__Btn Projects__BtnRight"
            src={ArrowRight}
            onClick={() => slideNext()}
            alt=""
          />
        </div>

        <Swiper
          onSlideChange={setSwiperRefHandler}
          spaceBetween={30}
          centeredSlides={true}
          onSwiper={setSwiperRef}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="Projects__Swiper"
          speed={500}
          loop={true}
        >
          {cards}
        </Swiper>

        <div className="Projects_Pagination">{pagination}</div>
      </div>
    </>
  );
}
