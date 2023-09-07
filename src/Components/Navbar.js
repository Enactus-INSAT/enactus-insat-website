import React, { useState} from "react";
import "../Styles/Navbar.css";
import lightLogo from "../Assets/logos/enactus-light.png";
import darkLogo from "../Assets/logos/enactus-dark.png"
import {IconContext} from "react-icons";
import {BsFacebook, BsLinkedin,BsInstagram} from "react-icons/bs"
import frFlag from "../Assets/icons/en.svg"
import enFlag from "../Assets/icons/fr.svg"




const menuItemsEn = [{
    name: "ABOUT", link: "about"
}, {
    name: "VISION", link: "vision"
}, {
    name: "ACTUALITIES", link: "actualités"
}, {
    name: "PROJECTS", link: "projects"
}, {
    name: "CONTACT US", link: "contact"
}];
const menuItemsFr= [{
    name: "À PROPOS", link: "about"
}, {
    name: "VISION", link: "vision"
}, {
    name: "ACTUALITES", link: "actualités"
}, {
    name: "PROJETS", link: "projects"
}, {
    name: "NOUS CONTACTER", link: "contact"
}];

const socialItems = [{
    SocialIcon: BsFacebook, link: "https://www.facebook.com/enactusinsat"
}, {
    SocialIcon: BsInstagram, link: "https://www.instagram.com/enactus_insat/"
}, {
    SocialIcon: BsLinkedin, link: "https://fr.linkedin.com/company/enactus-insat?trk=public_profile_volunteering-position_profile-section-card_full-click"
}
,];

const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'auto' });
    }

};
const Navbar = (props) => {
    var menuItems=""
    {props.language==="fr" ? menuItems=menuItemsFr :menuItems=menuItemsEn }

    var isSticky=props.isSticky;
    //responsiveness


    const [linkHovered, setLinkHovered] = useState(-1);
    const [iconHovered, setIconHovered] = useState(-1);
    const [flagClassfr,setFlagClassfr]=useState("flag-icon");
    const [flagClassen,setFlagClassen]=useState("flag-icon");





    return <nav className={isSticky ? "sticky" : "nav"}>
        <div className="navbar-logo-container" onClick={(e) => scrollToSection(e, "home")}>
            <img className="logo" src={isSticky ? darkLogo : lightLogo} alt=""/>
        </div>

        {isSticky ? null : <div className={"flag-container"}>
            <div onMouseOver={()=>{setFlagClassfr("flag-icon-hover")}} onMouseOut={() => {
                setFlagClassfr("flag-icon")
            }} onClick={()=>{
                props.setLanguage("fr")

            }}
            >
                <img src={frFlag} alt="" className={flagClassfr}/>
            </div>
            <div onMouseOver={()=>{setFlagClassen("flag-icon-hover")}} onMouseOut={() => {
                setFlagClassen("flag-icon")
            }} onClick={()=>{props.setLanguage("en")

            }}>
                <img src={enFlag} alt="" className={flagClassen}/>
            </div>
        </div> }

        <div className={isSticky ? "navbar-links-container-sticky" : "navbar-links-container"}>
            {
                linkHovered === -1 ?
                    menuItems.map(({name, link}, index) => {
                        return (
                            <a  href={link}
                               onClick={(e) => scrollToSection(e, link)}
                               className={isSticky ? "nav-element-sticky" : "nav-element"}
                                   onMouseOver={() => {
                                       setLinkHovered(index);
                                   }}
                                   onMouseOut={() => {
                                       setLinkHovered(-1);
                                   }}>{name}</a>


                        );
                    }) :
                    menuItems.map(({name, link}, index) => {
                        return (linkHovered === index ?
                                < a
                                    onClick={(e) => scrollToSection(e, link)}
                                    className={isSticky ? "nav-element-sticky" : "nav-element"}
                                   onMouseOver={() => {
                                       setLinkHovered(index);
                                   }}
                                   onMouseOut={() => {
                                       setLinkHovered(-1);
                                   }}>{name}</a>
                                : <a href={link}
                                     onClick={(e) => scrollToSection(e, link)}
                                     className={isSticky ? "nav-element-sticky nav-element-sticky-hovered" : "nav-element"}
                                     onMouseOver={() => {
                                         setLinkHovered(index);
                                     }}
                                     onMouseOut={() => {
                                         setLinkHovered(-1);
                                     }}>{name}</a>
                        );
                    })

            }

        </div>
        <div className="navbar-logos-container">
            {iconHovered === -1 ?
                socialItems.map(({SocialIcon, link}, index) => {
                    return (
                        isSticky ?
                            <IconContext.Provider value={{
                                className: 'social-icons', size: '1.5em', color: '#555555'
                            }}>
                                <a className="logo-element" href={link}
                                   onMouseOver={() => {
                                       setIconHovered(index);
                                   }}
                                   onMouseOut={() => {
                                       setLinkHovered(-1);
                                   }}
                                > <SocialIcon/></a>
                            </IconContext.Provider>

                            :
                            <IconContext.Provider value={{
                                className: 'social-icons', size: '1.5em', color: 'white'
                            }}>
                                <a className="logo-element" href={link}
                                   onMouseOver={() => {
                                       setIconHovered(index);
                                   }}
                                   onMouseOut={() => {
                                       setLinkHovered(-1);
                                   }}
                                ><SocialIcon/></a>
                            </IconContext.Provider>
                    )
                })
                :
                socialItems.map(({SocialIcon, link}, index) => {
                    return (
                        isSticky ?
                            <IconContext.Provider value={{
                                className: 'social-icons', size: '1.5em', color: '#555555'
                            }}>
                                <a className={iconHovered === index ? "logo-element" : "logo-element-hovered"}
                                   href={link}
                                   target={"_blank"}
                                   onMouseOver={() => {
                                       setIconHovered(index);

                                   }}
                                   onMouseOut={() => {
                                       setIconHovered(-1);

                                   }}
                                > <SocialIcon/></a>
                            </IconContext.Provider>
                            :
                            <IconContext.Provider value={{
                                className: 'social-icons', size: '1.5em', color: 'white'
                            }}>
                                <a className={iconHovered === index ? "logo-element" : "logo-element-hovered"}
                                   href={link}
                                   target={"_blank"}
                                   onMouseOver={() => {
                                       setIconHovered(index);

                                   }}
                                   onMouseOut={() => {
                                       setIconHovered(-1);

                                   }}
                                >
                                    <SocialIcon/></a>

                            </IconContext.Provider>
                    )
                })
            }
        </div>


        </nav>

}
export default Navbar;