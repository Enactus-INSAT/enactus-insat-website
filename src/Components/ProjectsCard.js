import React, { useEffect, useState } from "react";
import "../Styles/ProjectsCard.css";
import Actualite from "../Assets/images/Actualite.jpeg";
import Overlay from "../Assets/images/projectsOverlay.svg";
import exitIcon from "../Assets/icons/exit.svg";

const ProjectsCard = (props) => {
  const [detail, setDetail] = useState("");
  const showHandler = () => {
    setDetail("detail");
    props.swiper.autoplay.pause();
  };
  const hideHandler = () => {
    setDetail("");
    props.swiper.autoplay.resume();
    return "";
  };
  useEffect(() => {}, [detail]);
  const sectionStyle = {
    backgroundImage: `url(${Actualite})`,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const { data } = props;
  const DetailStyle = {
    backgroundColor: data.detailBackgroundColor,
  };
  return (
    <div className="ProjectsCard__Wrapper">
      <img src={Overlay} className="ProjectsCard__Overlay" alt=""></img>
      <div className="ProjectsCard__Main" style={sectionStyle}>
        <div className="ProjectsCard__DetailsBtn--Container">
          <button
            className={`ProjectsCard__DetailsBtn ProjectsCard__DonateBtn ${
              detail ? "ProjectsCard__None" : ""
            }`}
          >
            Donate{" "}
          </button>
          <button
            className={`ProjectsCard__DetailsBtn ${
              detail ? "ProjectsCard__None" : ""
            }`}
            onClick={showHandler}
          >
            View Details
          </button>
        </div>
        <div
          className={`ProjectsCard__DetailsCard  ${
            detail ? "ProjectsCard__Detail" : "ProjectsCard__None"
          }  ${!props.isActive && detail ? hideHandler() : ""}`}
          style={DetailStyle}
        >
          <p>{data.description}</p>
          <img
            src={exitIcon}
            className="ProjectsCard__DetailsClose"
            onClick={hideHandler}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
