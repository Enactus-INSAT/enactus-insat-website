import React, { useState, useEffect, useRef } from "react";
import SwiperCore, { Virtual } from "swiper";
import ArrowRight from "../Assets/icons/arrow-right.svg";
import ArrowLeft from "../Assets/icons/arrow-left.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import ActualitesCard from "./ActualitesCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/Slider.css";

// install Virtual module
SwiperCore.use([Virtual]);

const Slider = (props) => {
  const { data } = props;
  const [index, setIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  const responsive = {
    slidesNbr: width < 850 ? 1 : 3,
    rewind: width >= 1100,
    first: width < 850,
    spaceBetween: width < 700 ? 75 : 20,
  };

  // const clientWindowWidth = document.documentElement.clientWidth;

  // console.log(clientWindowWidth);
  // let slidesNbr = 3;
  // let rewind = true;
  // let first = false;
  // if (clientWindowWidth < 1300) {
  //   rewind = false;
  // }
  // if (clientWindowWidth < 1000) {
  //   first = true;
  //   slidesNbr = 1;
  // }
  const slides = Array.from({ length: data.length }).map(
    (_, index) => `Slide ${index + 1}`
  );

  const slideNext = () => {
    swiperRef.slideNext();
  };
  const slidePrev = () => {
    swiperRef.slidePrev();
  };
  useEffect(() => {}, [index]);
  useEffect(() => {}, [slides]);
  const cards = slides.map((slideContent, index) => (
    <SwiperSlide key={slideContent} virtualIndex={index}>
      {({ isActive, isNext }) => {
        return (
          <ActualitesCard
            data={data[index % data.length]}
            position={`${isActive ? "center" : `${isNext ? "left" : "right"}`}`}
            type={isActive ? "main" : "side"}
            className="Actualities__MainCard"
          />
        );
      }}
    </SwiperSlide>
  ));

  const pagination = slides.map((_, i) => {
    return (
      <div
        className={`Slider_PaginationCercle ${
          i === index ? "Slider_PaginationCercleSelected" : ""
        }`}
        key={`Pagination ${i}`}
      ></div>
    );
  });

  const setSwiperRefHandler = () => {
    if (!swiperRef?.activeIndex) {
      if (swiperRef?.activeIndex === 0) {
        return setIndex(0);
      }
      return setIndex(1);
    }
    setIndex(swiperRef.activeIndex);
  };
  const initHandler = () => {
    if (!responsive.first) {
      setTimeout(() => {
        const next = document.querySelector(".Slider__ArrowRight");
        next.click();
      }, 0);
    }

    return "";
  };

  return (
    <>
      <Swiper
        initialSlide={0}
        onSwiper={setSwiperRef}
        slidesPerView={responsive.slidesNbr}
        centeredSlides={true}
        spaceBetween={responsive.spaceBetween}
        pagination={false}
        navigation={false}
        virtual
        speed={300}
        rewind={responsive.rewind}
        onSlideChange={setSwiperRefHandler}
      >
        {cards}
      </Swiper>
      <div className="Slider_Pagination">{pagination}</div>
      <img
        className="Slider__Arrow Slider__ArrowLeft"
        src={ArrowLeft}
        onClick={() => slidePrev()}
        alt=""
      ></img>
      <img
        className="Slider__Arrow Slider__ArrowRight"
        src={ArrowRight}
        onClick={() => slideNext()}
        alt=""
        onLoad={initHandler}
      ></img>
    </>
  );
};

export default Slider;
