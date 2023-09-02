import React, { useEffect, useState } from "react";
import "../Styles/ProjectsCard.css";

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



    backgroundImage: `url(${props.data.imagePath})`,

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
      <img src={props.data.rectangle} className="ProjectsCard__Overlay" alt=""></img>


      <div className="ProjectsCard__Main" style={sectionStyle}>
        {detail ?<>  <div className="Projects__TitleDetail">{props.data.title}</div>  </>:null}


        <div className="ProjectsCard__DetailsBtn--Container">

          <div className={`ProjectsCard__Title ${
              detail ? "ProjectsCard__None" : ""
            }` }>
            {props.data.title}
             <div>
          <button
            className={`ProjectsCard__DetailsBtn ProjectsCard__DonateBtn ${
              detail ? "ProjectsCard__None" : ""
            }`}
            onClick={()=>{
              window.location="https://www.cha9a9a.tn/fund/detail/phosph-act-168758"
            }}
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
          </div>
        </div>
        <div
          className={`ProjectsCard__DetailsCard  ${
            detail ? "ProjectsCard__Detail" : "ProjectsCard__None"
          }  ${!props.isActive && detail ? hideHandler() : ""}`}
          style={DetailStyle}
        >


          <p className="Description">{data.description.split('\n').map((paragraph, index) => (
              <span key={index}>
          {paragraph}
                <br />
        </span>
          ))}</p>
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
