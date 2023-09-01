import React, {useEffect, useRef, useState} from "react";
import Navbar from "./Navbar";
import "../Styles/Home.css"
import bgHome from "../Assets/images/bg-home.jpg"

const Home = (props) => {


    const headerRef = useRef();
    const [isSticky, setIsSticky] = useState(false);
    const [navHeight, setNavHeight] = useState(0);

    const toggleStickyNav = function (entries) {
        const [entry] = entries;
        console.log(entry);
        if (!entry.isIntersecting) setIsSticky(true);
        else setIsSticky(false);
    };


    useEffect(() => {
        const header = headerRef.current;
        setNavHeight(header.getBoundingClientRect().height);
        console.log(navHeight);
        const headerObserver = new IntersectionObserver(toggleStickyNav, {
            root: null,
            threshold: 0,
            rootMargin: `${navHeight}px`
        });
        headerObserver.observe(header);
    }, []);

    const scrollToSection = (event, sectionId) => {
        event.preventDefault();

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'auto' });
        }

    };
    const language=props.language

    return (
        <div ref={headerRef}  className="home-container" id={"home"}>
            <div className="nav-container">
                <Navbar isSticky={isSticky} language={language} setLanguage={props.setLanguage}/>
            </div>

            <div className="home-banner-container">
                <img className="bg-img" src={bgHome} alt=""/>
                <div className="home-text-section">
                    <h1 className="primary-heading">ENACTUS INSAT</h1>
                    <p className="primary-text">
                        {language==="fr" ? "Enactus INSAT est une équipe faisant partie de “l’ONG” Enactus Tunisie.\n" +
                            "Fondée en 2018, Enactus INSAT permet aux jeunes étudiants de participer à la vie entrepreneuriale en créant  des projets à impact social, économique et environnemental qui évolueront en entreprises indépendantes. "
                             : "Enactus INSAT team is part of ENACTUS Tunisia that is an (affiliated with ENACTUS, a global) NGO. Founded in 2018, Enactus Insat allows young undergraduates to be part of the entrepreneurial world by creating projects with a social, economical and environmental impact which will bloom into independent and flourishing enterprises."}
                    </p>

                    <div
                        className="buttons">
                        <button className="fund-button" onClick={()=>{
                            window.location="https://www.cha9a9a.tn/fund/detail/phosph-act-168758"
                        }}>

                            {language==="fr" ? "financez-nous" : "Fund Us"}

                        </button>

                        <button className="contact-button" onClick={(e) => scrollToSection(e, "contact")}>
                            {language==="fr" ? "Nous Contacter" : "Contact Us"}


                        </button>
                    </div>

                </div>

            </div>


        </div>
    );
}
export default Home;