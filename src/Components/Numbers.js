import React, {useState} from "react";
import '../Styles/Numbers.css';
import {FaHandshake} from "react-icons/fa";
import {GoPerson} from "react-icons/go";
import {BsTwitter} from "react-icons/bs";
import {BiWorld} from "react-icons/bi";

const numbers = [
    {
        Icon: FaHandshake,
        number: "300",
        labelen:"Members of all years",
        labelfr: "Membres de toutes les années"

    },

    {
        Icon: BsTwitter,
        number: "380K",
        labelen:"Number of people impacted",
        labelfr: "Nombres de personnes impactées "
    },
    {
        Icon: BiWorld,
        number: "10",
        labelen: "Competitions won",
        labelfr: "Compétitions gagnées "
    },
    {
        Icon: GoPerson,
        number: "5",
        labelen:"Projects",
        labelfr: "Projets"
    },


]


function Numbers(props) {
    const [hovered, setHovered] = useState(-1);


    return (
        <>
            <div className="numbers-section-heading-container" id={"about"}>
                <div className="numbers-section-heading">
                    <div className="h-line"></div>
                    <div>Enactus</div>
                    <div className="h-line"></div>
                </div>
                <div className="section-heading"> {props.language==="fr" ? "EN CHIFFRES" :"IN NUMBERS" }</div>
            </div>

            <div className="container1">
                {
                    numbers.map(({Icon, number,labelfr,labelen}, index) => {
                        return(
                            <div className="cards"
                                 onMouseOver={()=>{
                                     setHovered(index);
                                 }}
                                 onMouseOut={()=>{
                                     setHovered(-1);
                                 }}
                            >
                                <div className="icon"><Icon  size={window.innerWidth<500 ? 30:50} color='#F9CD7A'/>
                                </div>
                                <div className={hovered == index ? "number-title-hovered" : "number-title" }>{number}+</div>
                                <div className="title2">{props.language==="fr" ? labelfr : labelen}</div>
                            </div>
                        );
                    })
                }

            </div>
        </>
    );
}

export default Numbers;
