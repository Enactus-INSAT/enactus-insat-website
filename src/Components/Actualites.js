import { useState, useEffect } from "react";
// import Swiper from "swiper";
import Slider from "./Slider";
import ActualitesCard from "./ActualitesCard";
import data from "../Assets/data/ActualitesCards.json";
import "../Styles/Actualites.css";
import ArrowRight from "../Assets/icons/arrow-right.svg";
import ArrowLeft from "../Assets/icons/arrow-left.svg";
import { SwiperSlide, Swiper } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/Slider.css";
import SwiperCore, { Virtual } from "swiper";
SwiperCore.use([Virtual]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Actualites = (props) => {
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
    first: width < 850,
    spaceBetween: width < 700 ? 75 : 20,
  };
  const [index, setIndex] = useState(0);

  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState(
    Array.from({ length: data.length }).map(
      (_, index) => `Actualite ${index + 1}`
    )
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
        className={`Slider_PaginationCercle ${
          i === index ? "Slider_PaginationCercleSelected" : ""
        }`}
        key={`Pagination_Actualite ${i}`}
      ></div>
    );
  });

  const cards = slides.map((slideContent, index) => (
    <SwiperSlide
      key={slideContent}
      className="Slider__SwiperSlide"
      virtualIndex={index}
    >
      {({ isActive, isNext }) => (
        <ActualitesCard
          // swiper={swiperRef}
          // isActive={isActive}
          position={`${isActive ? "center" : `${isNext ? "left" : "right"}`}`}
          type={isActive ? "main" : "side"}
          // className="Actualities__MainCard"
          data={data[index]}
        ></ActualitesCard>
      )}
    </SwiperSlide>
  ));

  const setSwiperRefHandler = () => {
    if (!swiperRef?.realIndex) {
      if (swiperRef?.realIndex === 0) {
        return setIndex(0);
      }
      return setIndex(0);
    }
    console.log(swiperRef);
    setIndex(swiperRef.realIndex);
  };

  return (
    <>
      <div className="actualities-section-heading-container">
        <div className="activities-section-heading">
          <div className="a-h-line"></div>
          <div className="section-heading">ACTUALITIES</div>
          <div className="a-h-line"></div>
        </div>
      </div>
      <div className="Actualites__Wrap">
        <div className="Actualites_SliderContainer">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={responsive.slidesNbr}
            centeredSlides={true}
            spaceBetween={responsive.spaceBetween}
            pagination={false}
            navigation={false}
            speed={500}
            loop={true}
            loopedSlides={2}
            onSlideChange={setSwiperRefHandler}
            className="Slider__Swiper"
          >
            {cards}
          </Swiper>
          <div className="Actualities__Back Actualities__RightBack"></div>
          <div className="Actualities__Back Actualities__LeftBack "></div>
          <div className="Silder_ArrowsWrapper">
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
            ></img>
          </div>
        </div>
        <div className="Slider_Pagination">{pagination}</div>
      </div>
    </>
  );
};

export default Actualites;
