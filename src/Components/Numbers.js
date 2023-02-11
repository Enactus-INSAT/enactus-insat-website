import React from "react";
import './Numbers.css';
import { FaHandshake } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { BsTwitter } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";



function Numbers() {
  return (
    <>
    <br></br>
    <div className="container4">
    <div className="title3">
      <div className="line"></div>
      <div>Enactus</div>
      <div className="line"></div>
    </div>
    <div className="title4">EN CHIFFRES</div>
    </div>
  <div className="container1">
    <div className="cards" > 
    <div className="icon">  <FaHandshake size={50} color='#F9CD7A' />  
    </div>
    <div className="title1">4597+</div>
    <div className="title2">People Rised</div>
  
   </div>
    <div className="cards">
    <div className="icon"> <GoPerson size={50} color='#F9CD7A' />  
    </div>
    <div className="title1">8945+</div>
    <div className="title2">Volunteer</div>

    </div>
    <div className="cards">
    <div className="icon"> <BsTwitter size={50} color='#F9CD7A' />  
    </div>
    <div className="title1">10M+</div>
    <div className="title2">Poor People Saved</div>
    </div>
    <div className="cards">
    <div className="icon"> <BiWorld size={50} color='#F9CD7A' />  
    </div>
    <div className="title1">100+</div>
    <div className="title2">Country Member</div>
    </div>
  </div>
  
  

    </>

  );
}

export default Numbers;
