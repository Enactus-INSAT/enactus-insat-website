import React, { useState} from "react";
import "../Styles/Navbar.css";
import lightLogo from "../Assets/logos/enactus-light.png";
import darkLogo from "../Assets/logos/enactus-dark.png"
import {IconContext} from "react-icons";
import {BsFacebook, BsLinkedin,BsInstagram} from "react-icons/bs"


const menuItems = [{
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

const socialItems = [{
    SocialIcon: BsFacebook, link: "https://www.facebook.com/enactusinsat"
}, {
    SocialIcon: BsInstagram, link: "https://www.instagram.com/enactus_insat/"
}, {
    SocialIcon: BsLinkedin, link: "https://fr.linkedin.com/company/enactus-insat?trk=public_profile_volunteering-position_profile-section-card_full-click"
},];
const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'auto' });
    }

};
const Navbar = ({isSticky}) => {
    //responsiveness
    const [openMenu, setOpenMenu] = useState(false);

    const [linkHovered, setLinkHovered] = useState(-1);
    const [iconHovered, setIconHovered] = useState(-1);

    return <nav className={isSticky ? "sticky" : "nav"}>
        <div className="navbar-logo-container" onClick={(e) => scrollToSection(e, "home")}>
            <img className="logo" src={isSticky ? darkLogo : lightLogo} alt=""/>
        </div>
        <div className={isSticky ? "navbar-links-container-sticky" : "navbar-links-container"}>
            {
                linkHovered === -1 ?
                    menuItems.map(({name, link}, index) => {
                        return (
                            <a
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
                                < a href={link}
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
                                <a className="logo-element" href=""
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