import React from  "react";
import '../Styles/Vision.css'
import pc from '../Assets/images/vision-asset.png'
import integrityIcon from'../Assets/logos/integrity-logo.svg'
import trustIcon from'../Assets/logos/trust-logo.svg'
import excellenceIcon from'../Assets/logos/excellence-logo.svg'

const visionList =[
    {

        "icon" : integrityIcon,
        "title" : "Integrity",
        "paragraph" : "We hold ourself to a strong ethical and moral code"
    },
    {
        "icon" : trustIcon,
        "title" : "Trust",
        "paragraph" : "We hold ourself to a strong ethical and  moral code"
    },
    {
        "icon" : excellenceIcon,
        "title" : "Excellence",
        "paragraph" : "We consistenly strive to do high-quality work and give no room for errore"
    },
    {
        "icon" : excellenceIcon,
        "title" : "Excellence",
        "paragraph" : "We consistenly strive to do high-quality work and give no room for errore"
    }
]
function Vision() {
   const table  = visionList.map((visionItem, index) => {
        return (
        <div className="vision-list-item" key={index}>
            <div className="wrapper">
                <div className="vision-icon">

                    <img src={visionItem.icon}/>
                </div>
            <div className="vertical-line">

            </div>
        </div>
            
            <div className="text-vision">
                <h1>{visionItem.title}</h1>
                <p>{visionItem.paragraph}</p>
            </div>
        </div>
        );
    })
    return( 
        <div className="Background-Vision">
            <div className="info">
                <div className="rectangle"></div>
                <h1 className="titre">Our Vision</h1>
                <div className="vision-list-container">
                { table} 
                </div>
            </div>
           <div className="photo">
           <img className="pc" src={pc}></img>
           </div>
         
        </div>
    );
}

export default Vision   