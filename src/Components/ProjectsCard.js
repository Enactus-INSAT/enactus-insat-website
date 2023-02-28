import React, { useEffect, useState } from "react";
import "../Styles/ProjectsCard.css";
import Actualite from "../Assets/images/Actualite.jpeg";

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
    return "ProjectsCard__None";
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
      <div className="ProjectsCard__Overlay"></div>
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
          <p>
            {data.description}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
            augue at sem sodales finibus ac non magna. Donec molestie mauris ut
            diam convallis viverra. Cras et diam tristique, hendrerit augue vel,
            posuere elit. Nunc condimentum nisi id felis consectetur, at finibus
            orci pretium. Pellentesque sed massa eu mi lobortis interdum. Donec
            non efficitur odio. Praesent porttitor, orci eget tempus lacinia,
            odio libero accumsan purus, vitae lobortis est nisl in arcu. In
            auctor libero sit amet augue semper ultrices. Nunc sed elit at enim
            elementum eleifend eget eget quam. Nunc risus ante, mattis eu massa
            ut, auctor malesuada risus. Sed pellentesque ipsum mollis auctor
            hendrerit. Cras maximus lorem orci, in dictum nisi euismod in. Proin
            eu nunc nec odio egestas consectetur. Phasellus et arcu malesuada,
            blandit augue ut, tempus elit. Aliquam vitae magna porta, semper
            massa sit amet, finibus augue. Nulla facilisi. Quisque ullamcorper
            dolLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sed augue at sem sodales finibus ac non magna. Donec molestie mauris
            ut diam convallis viverra. Cras et diam tristique, hendrerit augue
            vel, posuere elit. Nunc condimentum nisi id felis consectetur, at
            finibus orci pretium. Pellentesque sed massa eu mi lobortis
            interdum. Donec non efficitur odio. Praesent porttitor, orci eget
            tempus lacinia, odio libero accumsan purus, vitae lobortis est nisl
            in arcu. In auctor libero sit amet augue semper ultrices. Nunc sed
            elit at enim elementum eleifend eget eget quam. Nunc risus ante,
            mattis eu massa ut, auctor malesuada risus. Sed pellentesque ipsum
            mollis auctor hendrerit. Cras maximus lorem orci, in dictum nisi
            euismod in. Proin eu nunc nec odio egestas consectetur. Phasellus et
            arcu malesuada, blandit augue ut, tempus elit. Aliquam vitae magna
            porta, semper mass finibus ac non magna. Donec molestie mauris ut
            diam c
          </p>
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
