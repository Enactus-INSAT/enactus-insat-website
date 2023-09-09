import React, { useState } from 'react';
import '../Styles/Activity.css';
import formation  from "../Assets/images/formations.png"
import workshop from  "../Assets/images/workshop.png"
import alumni from "../Assets/images/alumni.png"

const activities = [
    {
        titlefr: "Workshops",
        titleen:"Workshops",
        descriptionen:"We hold weekly workshops and reunions that can also be held exceptionally in times of need. \n"+
        "During said workshops we either work on specific aspects of different projects or work on one of two axes: fundraising\n" +
            "and marketing. As for the reunions, we usually discuss and evaluate the progress made in different projects.",
        descriptionfr: "Des réunions et des workshops sont organisés de manière hebdomadaire.\n" +
            "Les workshops sont destinés à réaliser les tâches nécessaires pour nos projets ou celles de nos deux pôles: fundraising et marketing.\n" +
            "Pendant les réunions, on évalue l’avancement réalisé et on planifie les étapes à venir.\n",
        picture: workshop,
        id:0
    }
    , {
        titlefr: "Réseau Alumni",
        titleen:"Our network of Alumni",
        descriptionen:" Our network of Alumni are constantly and continuously guiding us by supervising our ongoing projects and providing us with the \n" +
            "right support.\n"+"Their skills, wisdom and experience have always been of great help to us throughout our journey.",
        descriptionfr: "Il s'agit d'un réseau d'anciens membres d'Enactus Insat qui joue un grand rôle dans la supervision et l'orientation de l’équipe actuelle grâce à son expérience et savoir-faire\n",
        picture: alumni,
        id:1
    },
    {
        titlefr: "Formations",
        titleen:"Trainings",
        descriptionen:"We aim to have well-formed and knowledgeable members, for which reason we usually host numerous professional training sessions targeting both soft and hard skills.\n",
        descriptionfr:"Pour assurer une bonne acquisition de compétence pour notre équipe, on assure des formations couvrant à la fois les soft skills et les hard skills.\n" ,
        picture: formation,
        id:2
    }
];



const Activity = (props) => {
    let[toggle,setToggle]=useState([0,0,0])
    let[description,setDescription]=useState("")
    let[titre,setTitre]=useState("")
    const DetailStyle = {
        backgroundImage: `url(${alumni})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };
    const color={
        color:"#4D4D4D"
    }
    const bgcolor={
        backgroundColor:"#4D4D4D"
    }

    return <>
        <div className="activities-section-heading-container" >
            <div className="activities-section-heading">
                <div className="a-h-line" style={bgcolor}></div>
                <div className="section-heading" style={color}>{props.language==="fr" ? "NOTRE ACTIVITÉ " :"OUR ACTIVITY" }</div>
                <div className="a-h-line" style={bgcolor}></div>
            </div>
        </div>
        {
            activities.map(({ titleen, titlefr, descriptionen, descriptionfr, picture, id }, index) => {
                const DetailStyle = {
                    backgroundImage: `url(${picture})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                };

                const currentDescription = props.language === "fr" ? descriptionfr : descriptionen;
                const currentTitle = props.language === "fr" ? titlefr : titleen;

                return (
                    <div className="activity-container" style={DetailStyle} key={id}>
                        <h2 className="activity-title">{currentTitle}</h2>
                        <div className={"activity-text"}>
                            {toggle[id] === 0 ? (
                                <>
                                    {currentDescription.slice(0, 50)}...
                                    <span className={"activity-more"} onClick={() => {
                                        const aux = [...toggle];
                                        aux[id] = 1;
                                        setToggle(aux);
                                    }}>..more</span>
                                </>
                            ) : (
                                <>
                                    {currentDescription}
                                    <span className={"activity-more"} onClick={() => {
                                        const aux = [...toggle];
                                        aux[id] = 0;
                                        setToggle(aux);
                                    }}>less</span>
                                </>
                            )}
                        </div>
                    </div>
                );
            })
        }









    </>
}
export default Activity;