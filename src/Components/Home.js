import React, {useEffect, useRef, useState} from "react";
import Navbar from "./Navbar";
import "../Styles/Home.css"
import bgHome from "../Assets/images/bg-home.jpg"

const Home = () => {

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
    return (
        <div ref={headerRef}  className="home-container" id={"home"}>
            <div className="nav-container">
                <Navbar isSticky={isSticky}/>
            </div>

            <div className="home-banner-container">
                <img className="bg-img" src={bgHome} alt=""/>
                <div className="home-text-section">
                    <h1 className="primary-heading">ENACTUS INSAT</h1>
                    <p className="primary-text">
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}                </p>

                    <div
                        className="buttons">
                        <button className="fund-button" onClick={()=>{
                            window.location="https://www.cha9a9a.tn/fund/detail/phosph-act-168758"
                        }}>
                            Fund Us
                        </button>

                        <button className="contact-button" onClick={(e) => scrollToSection(e, "contact")}>
                            Contact Us
                        </button>
                    </div>

                </div>

            </div>


        </div>
    );
}
export default Home;