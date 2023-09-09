import { useState, useEffect } from "react";
import Swiper from "swiper";
import Slider from "./Slider";
import ActualitesCard from "./ActualitesCard";
import "../Styles/Actualites.css";
import ArrowRight from "../Assets/icons/arrow-right.svg";
import ArrowLeft from "../Assets/icons/arrow-left.svg";
const data = [
  {date:"30/01/2023",
    titlefr: "Passages radio",

    descriptionfr:
      "30 janvier 2023 : Passage radio avec RTCI : présentation de notre projet : Phosph’Act. \n 30 janvier 2023 : Passage radio avec RTCI : présentation de notre projet : Phosph’Act." +
        "\n 24 décembre 2022 : Passage radio avec la radio nationale pour présenter notre projet : Phosph’Act \n ",
    titleen: "Radio interview",
    descriptionen:
        "30th January 2023 : Radio interview with RTCI : presenting  our project : Phosph’Act.\n" +
        "\n" +
        "24th December 2022: Radio interview with National Radio presenting our project: Phosph’Act\n",
    imagePath: "",
  },
  {date:"28/11/2022",
    titlefr: "Team building",
    descriptionfr:
        "28 octobre 2022 : Notre premier team building.\n",
    titleen: "Teambuilding",
    descriptionen:
        "28 October 2022: Our first teambuilding of the current term of office.",
    imagePath: "",
  },
  {date:"7/12/2022\n12/12/2022",
    titlefr: "Concours",
    descriptionfr:
        "12 décembre 2022 : PHOSPH’ACT a remporté le premier prix à MOOVEJTN organisé par l'Institut français de Tunisie\n\nm start" +
        "" +
        "7 décembre 2022 : Phosph’Act a remporté le premier prix à la compétition de pitch SDGS organisée par Expertise France et Innov’i.\n",
    titleen: "Competitions",
    descriptionen:
        "12 December 2022 :Phosph’Act took first prize in MOOVEJTN held at the french institute of Tunisia.\n\n" +
        "7 December 2022 :Phosph’Act took first prize in the SDGs pitch competition organized by Expertise France and Innov’i.\n",
    imagePath: "",
  },

];
const Actualites = (props) => {
  return (
      <>
        <div className="actualities-section-heading-container" id={"actualités"}>
          <div className="activities-section-heading">
            <div className="a-h-line"></div>
            <div className="section-heading" >{props.language==="fr" ? "ACTUALITES" : "ACTUALITIES"}</div>
            <div className="a-h-line"></div>
          </div>
        </div>
        <div className="Actualites_Wrap">
          <div className="Actualites_SliderContainer">
            <Slider data={data} language={props.language} />
          </div>
          <div className="Actualities__Back Actualities__RightBack"></div>
          <div className="Actualities__Back Actualities__LeftBack "></div>
        </div>
      </>

  );
};

export default Actualites;
