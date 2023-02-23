import React from "react";
import '../Styles/Activity.css';
import formation  from "../Assets/images/formations.png"
import workshop from  "../Assets/images/workshop.png"
import alumni from "../Assets/images/alumni.png"

const activities = [
    {
        title: "Workshops",
        description: "Des réunions et des workshops sont organisés de manière hebdomadaire.\n" +
            "Les workshops sont destinés à réaliser les tâches nécessaires pour nos projets ou celles de nos deux pôles: fundraising et marketing.\n" +
            "Pendant les réunions, on évalue l’avancement réalisé et on planifie les étapes à venir.\n",
        picture: workshop
    }
    , {
        title: "Réseau Alumni",
        description: "Il s'agit d'un réseau d'anciens membres d'Enactus Insat qui joue un grand rôle dans la supervision et l'orientation de l’équipe actuelle grâce à son expérience et savoir-faire\n",
        picture: alumni
    },
    {
        title: "Formations",
        description:"Pour assurer une bonne acquisition de compétence pour notre équipe, on assure des formations couvrant à la fois les soft skills et les hard skills.\n" ,
        picture: formation
    }
];
const Activity = () => {
    return <>
        <div className="activities-section-heading-container">
            <div className="activities-section-heading">
                <div className="a-h-line"></div>
                <div className="section-heading">OUR ACTIVITY</div>
                <div className="a-h-line"></div>
            </div>
        </div>
        <div className="activities">
            {
                activities.map(({title, description, picture}, index) => {
                    if (index % 2)
                        return (
                            <>
                                <div className="activity">
                                    <div className="rectangle-activity"></div>
                                    <h3 className="activity-title">{title}</h3>
                                    <p>{description}</p>
                                </div>
                                <img className="activity-picture" src={picture} alt=""/>

                            </>)
                    else return (
                        <>
                            <img className="activity-picture" src={picture} alt=""/>
                            <div className="activity">
                                <div className="rectangle-activity"></div>
                                <h3 className="activity-title">{title}</h3>
                                <p>{description}</p>
                            </div>
                        </>)
                })
            }
        </div>
    </>
}
export default Activity;