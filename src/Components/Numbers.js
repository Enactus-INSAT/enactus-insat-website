import React, {useState} from "react";
import '../Styles/Numbers.css';
import {FaHandshake} from "react-icons/fa";
import {GoPerson} from "react-icons/go";
import {BsTwitter} from "react-icons/bs";
import {BiWorld} from "react-icons/bi";

const numbers = [
    {
        Icon: FaHandshake,
        number: "4597",
        label: "People Rised"
    },
    {
        Icon: GoPerson,
        number: "8945",
        label: "Volunteer"
    },
    {
        Icon: BsTwitter,
        number: "10M",
        label: "Poor People Saved"
    },
    {
        Icon: BiWorld,
        number: "100",
        label: "Country Member"
    }
]

function Numbers() {
    const [hovered, setHovered] = useState(-1);

    return (
        <>
            <div className="numbers-section-heading-container" id={"about"}>
                <div className="numbers-section-heading">
                    <div className="h-line"></div>
                    <div>Enactus</div>
                    <div className="h-line"></div>
                </div>
                <div className="section-heading">EN CHIFFRES</div>
            </div>

            <div className="container1">
                {
                    numbers.map(({Icon, number,label}, index) => {
                        return(
                            <div className="cards"
                                 onMouseOver={()=>{
                                     setHovered(index);
                                 }}
                                 onMouseOut={()=>{
                                     setHovered(-1);
                                 }}
                            >
                                <div className="icon"><Icon size={50} color='#F9CD7A'/>
                                </div>
                                <div className={hovered == index ? "number-title-hovered" : "number-title" }>{number}+</div>
                                <div className="title2">{label}</div>
                            </div>
                        );
                    })
                }

            </div>
        </>
    );
}

export default Numbers;
