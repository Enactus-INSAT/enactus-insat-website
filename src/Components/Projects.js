import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectsCard from "./ProjectsCard";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles/Projects.css";
import ArrowRight from "../Assets/icons/projectArrow-right.svg";
import ArrowLeft from "../Assets/icons/projectArrow-left.svg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const data = [
  {
    title: "Lorem Ipsum 0",
    description: "0",
    imagePath: "",
    detailBackgroundColor: "rgba(110, 51, 51, 0.5)",
  },
  {
    title: "Lorem Ipsum 1",
    description: "1",
    imagePath: "",
    detailBackgroundColor: "rgba(56, 96, 51, 0.5)",
  },
  {
    title: "Lorem Ipsum 2",
    description: "2",
    imagePath: "",
    detailBackgroundColor: "rgba(89, 51, 51, 0.5)",
  },
  {
    title: "Lorem Ipsum 3",
    description: "3",
    imagePath: "",
    detailBackgroundColor: "rgba(44, 51, 15, 0.5)",
  },
];

export default function Projects() {
  const clientWindowWidth = document.documentElement.clientWidth;
  console.log(clientWindowWidth);
  let slidesNbr = 3;
  if (clientWindowWidth < 1) {
    slidesNbr = 1;
  }
  const progressCircle = useRef(null);
  const [index, setIndex] = useState(0);
  const [Ref, setRef] = useState(0);

  const progressContent = useRef(null);
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState(
    Array.from({ length: 4 }).map((_, index) => `Slide ${index + 1}`)
  );
  const swiper = useSwiper();

  const slideNext = () => {
    swiperRef.slideNext();
  };
  const slidePrev = () => {
    swiperRef.slidePrev();
  };
  const nextHandler = () => {
    setIndex((prev) => (prev + 1 + data.length) % data.length);
    console.log(index);
  };
  const previousHandler = () => {
    setIndex((prev) => (prev + 1 + data.length) % data.length);
    console.log(index);
  };

  useEffect(() => {}, [index]);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  // console.log(swip er.autoplay);
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
  return (
    <>
      <div className="Projects__Wrapper">
        <h1>NOS PROJETS</h1>
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

        <div className="Projects__Main">
          <Swiper
            onNavigationNext={nextHandler}
            onNavigationPrev={previousHandler}
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
            rewind={true}
          >
            {cards}
          </Swiper>
        </div>
      </div>
    </>
  );
}
