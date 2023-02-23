import { useState, useEffect } from "react";
import Swiper from "swiper";
import Slider from "./Slider";
import ActualitesCard from "./ActualitesCard";
import "../Styles/Actualites.css";
import ArrowRight from "../Assets/icons/arrow-right.svg";
import ArrowLeft from "../Assets/icons/arrow-left.svg";
const data = [
  {
    title: "Lorem Ipsum 0",
    description:
      "Material UI is a comprehensive library of components that features our implementation of Google's Material Design system. Joy UI is a beautifully designed ..",
    imagePath: "",
  },
  {
    title: "Lorem Ipsum 1",
    description:
      "Material UI is a comprehensive library of components that features our implementation of Google's Material Design system. Joy UI is a beautifully designed ..",
    imagePath: "",
  },
  {
    title: "Lorem Ipsum 2",
    description:
      "Material UI is a comprehensive library of components that features our implementation of Google's Material Design system. Joy UI is a beautifully designed ..",
    imagePath: "",
  },
  {
    title: "Lorem Ipsum 3",
    description:
      "Material UI is a comprehensive library of components that features our implementation of Google's Material Design system. Joy UI is a beautifully designed ..",
    imagePath: "",
  },
  {
    title: "Lorem Ipsum 1",
    description:
      "Material UI is a comprehensive library of components that features our implementation of Google's Material Design system. Joy UI is a beautifully designed ..",
    imagePath: "",
  },
];
const Actualites = (props) => {
  return (
      <>
        <div className="actualities-section-heading-container">
          <div className="activities-section-heading">
            <div className="a-h-line"></div>
            <div className="section-heading">ACTUALITIES</div>
            <div className="a-h-line"></div>
          </div>
        </div>
        <div className="Actualites_Wrap">
          <div className="Actualites_SliderContainer">
            <Slider data={data} />
          </div>
          <div className="Actualities__Back Actualities__RightBack"></div>
          <div className="Actualities__Back Actualities__LeftBack "></div>
        </div>
      </>

  );
};

export default Actualites;
