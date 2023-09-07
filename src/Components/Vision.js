import React from "react";
import '../Styles/Vision.css'
import pc from '../Assets/images/vision-asset.png'
import integrityIcon from '../Assets/logos/integrity-logo.svg'
import trustIcon from '../Assets/logos/trust-logo.svg'
import excellenceIcon from '../Assets/logos/excellence-logo.svg'
import Origami from "../Assets/logos/origami2.svg"

const visionList = [
    {

        "icon": integrityIcon,
        "titleen": "innovation",
        "titlefr":"L’innovation",
        "paragraphfr":"Nous trouvons, analysons et résolvons les problèmes \n courants : nous trouvons des solutions idéales, créatives et viables.",
        "paragraphen": "We spot, analyze and fix current real-life problems : we find ideal, creative  and feasible solutions."
    },
    {
        "icon": trustIcon,
        "titleen": "Entrepreneurship",
        "titlefr":"Entreprendre",
        "paragraphfr":"Nous apportons un changement, nous concevons et développons des projets efficaces et fonctionnels.",
        "paragraphen": "We think of, and then proceed to come up and work on efficient and functional projects.\n" +
            "We make a change."
    },
    {
        "icon": excellenceIcon,
        "titleen": "entrepreneurial experience",
        "titlefr":"Expérience entrepreneuriale",
        "paragraphfr":"Nous formons des futurs entrepreneurs.",
        "paragraphen": "We shape future entrepreneurs."
    },
    {
        "icon": excellenceIcon,
        "titleen": "team spirit",
        "titlefr":"L’esprit d’équipe",
        "paragraphfr":"Nous construisons une équipe unie, motivée, collaborative et engagée.",
        "paragraphen": "We build a challenging, collaborative and engaging team . We work as one entity."
    }
]

function Vision(props) {
    const table = visionList.map((visionItem, index) => {
        return (
            <div className="vision-list-item" key={index} >
                <div className="wrapper">
                    <div className="vision-icon-container">
                        <img className="vision-icon" src={visionItem.icon}/>
                    </div>
                    <div className="vertical-line"></div>
                </div>
                <div className="text-vision">
                    <h1>{props.language==="fr" ? visionItem.titlefr :visionItem.titleen }</h1>
                    <p>{props.language==="fr" ? visionItem.paragraphfr :visionItem.paragraphen }</p>
                </div>
            </div>
        );
    })
    return (
        <div className="container-vision" id={"vision"} >
            <div className="info">
                <h1 className="titre">{props.language==="fr" ? "NOTRE VISION" :"OUR VISION" }</h1>
                <div className="vision-list-container">
                    {table}
                </div>
            </div>
            <div className="photo">
                <img className="vision-image" src={pc}></img>
            </div>
        </div>
    );
}

export default Vision   