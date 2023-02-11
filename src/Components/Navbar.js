import React, {useState} from "react";
import "../Styles/Navbar.css";
import logo from "../Assets/logos/enactus.png"
import {IconContext} from "react-icons";
import {BsFacebook, BsLinkedin}from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [];
    return <nav>
        <div className="navbar-logo-container">
            <img className="logo" src={logo} alt="" />
        </div>
        <div className="navbar-links-container">
            <a href="" className="nav-element">ABOUT</a>
            <a href="" className="nav-element">MISSION</a>
            <a href="" className="nav-element">VISION</a>
            <a href="" className="nav-element">TEAM</a>
            <a href="" className="nav-element">CONTACT US</a>
        </div>
        <div className="navbar-logos-container">
            <IconContext.Provider value={{ className: 'social-icons',
                size: '2em',
                color: 'white'
            }}>
               <a href=""><BsFacebook/></a>
                <a href=""><AiFillInstagram/></a>
                <a href=""><BsLinkedin/></a>
            </IconContext.Provider>
        </div>
    </nav>
}
export default Navbar;