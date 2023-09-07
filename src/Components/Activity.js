import React from "react";
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
        picture: workshop
    }
    , {
        titlefr: "Réseau Alumni",
        titleen:"Our network of Alumni",
        descriptionen:" Our network of Alumni are constantly and continuously guiding us by supervising our ongoing projects and providing us with the \n" +
            "right support.\n"+"Their skills, wisdom and experience have always been of great help to us throughout our journey.",
        descriptionfr: "Il s'agit d'un réseau d'anciens membres d'Enactus Insat qui joue un grand rôle dans la supervision et l'orientation de l’équipe actuelle grâce à son expérience et savoir-faire\n",
        picture: alumni
    },
    {
        titlefr: "Formations",
        titleen:"Trainings",
        descriptionen:"We aim to have well-formed and knowledgeable members, for which reason we usually host numerous professional training sessions targeting both soft and hard skills.\n",
        descriptionfr:"Pour assurer une bonne acquisition de compétence pour notre équipe, on assure des formations couvrant à la fois les soft skills et les hard skills.\n" ,
        picture: formation
    }
];
const Activity = (props) => {
    return <>
        <div className="activities-section-heading-container">
            <div className="activities-section-heading">
                <div className="a-h-line"></div>
                <div className="section-heading">{props.language==="fr" ? "NOTRE ACTIVITÉ " :"OUR ACTIVITY" }</div>
                <div className="a-h-line"></div>
            </div>
        </div>

            {
                activities.map(({titleen,titlefr,descriptionen, descriptionfr, picture}, index) => {
                    if (index % 2)
                        return (
                            <>
                            <div className="activities1">
                                <div className="activity">
                                    <div className="rectangle-activity"></div>
                                    <h3 className="activity-title">
                                        {props.language==="fr" ? titlefr :titleen }
                                        </h3>
                                    <p>{props.language==="fr" ? descriptionfr :descriptionen }</p>
                                </div>
                                <img className="activity-picture" src={picture} alt=""/>
                            </div>
                            </>)
                    else return (
                        <>
                        <div className="activities2">
                            <img className="activity-picture" src={picture} alt=""/>
                            <div className="activity">
                                <div className="rectangle-activity"></div>
                                <h3 className="activity-title">{props.language==="fr" ? titlefr :titleen }</h3>
                                {window.innerWidth<500 && titleen==="Trainings" ? <br/> : null}
                                <p>{props.language==="fr" ? descriptionfr :descriptionen }</p>
                            </div>
                        </div>
                        </>)
                })
            }

    </>
}
export default Activity;