import React, { useEffect, useState } from "react";
import "../Styles/ActualitesCard.css";
import Actualite from "../Assets/images/Actualite.jpeg";
import arrow from "../Assets/icons/arrow.svg";

const ActualitesCard = (props) => {
  const [back, setBack] = useState("");

  const { title, description } = props.data;
  const showHandler = () => {
    setBack("back");
  };
  const hideHandler = () => {
    setBack("");
    return "";
  };
  useEffect(() => {}, [back]);
  const sectionStyle = {
    backgroundImage: `url(${Actualite})`,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: "22%",
    filter: "blur(1px)",
    zIndex: -10,
  };
  return (
    <div className={"ActualiteCard__Final"}>
      <div className={`ActualiteCard__Wrap ${props.position} `}>
        <div
          className={`ActualiteCard__Container ActualiteCard__Container--${
            props.type
          } ${back ? "none" : "front"}`}
        >
          <img
            src={Actualite}
            alt=""
            className={`ActualiteCard__Img ActualiteCard__Img--${props.position} `}
          ></img>
          <h3
            className={`ActualiteCard__Title ActualiteCard__Title--${props.type} `}
          >
            {title}
          </h3>
          <p className={`ActualiteCard__P ActualiteCard__P--${props.type} `}>
            {description}
          </p>
          <img
            src={arrow}
            alt="  "
            className={`ActualiteCard__Arrow ActualiteCard__Arrow--${props.type} `}
            onClick={showHandler}
          />
        </div>
        <div
          className={`ActualiteCard__Overlay ActualiteCard__Overlay--${props.type} `}
        ></div>
      </div>
      {/*!!!!!!!!!!!-------BACK CARD-----!!!!!!!!!*/}

      <div
        className={`ActualiteCard__Wrap ActualiteCard__WrapDetails ${
          props.position
        }  ${back ? "back" : "none"}  ${
          props.type === "side" && back ? hideHandler() : ""
        }`}
      >
        <div
          className="ActualiteCard__BackBackground"
          style={sectionStyle}
        ></div>
        <div
          className={`ActualiteCard__Container ActualiteCard__Container--${props.type}  ${back}`}
        >
          {/* <h3
            className={`ActualiteCard__Title ActualiteCard__Title--${props.type} `}
          >
            {title}
          </h3> */}
          <p className={`ActualiteCard__P ActualiteCard__P--${props.type} `}>
            {description}
            {description}
            {description}
          </p>
          <img
            src={arrow}
            alt="  "
            className={`ActualiteCard__Arrow ActualiteCard__Arrow--${props.type} ActualiteCard__ArrowDetails`}
            onClick={hideHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ActualitesCard;
