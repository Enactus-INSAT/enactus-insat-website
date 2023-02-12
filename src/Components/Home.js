import React, {useEffect, useRef, useState} from "react";
import Navbar from "./Navbar";
import "../Styles/Home.css"
import bgHome from "../Assets/images/bg-home.jpg"

const Home = () => {

    // Sticky navigation: Intersection Observer API
    const navRef = useRef();
    const headerRef = useRef();
    const [isSticky, setIsSticky] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const toggleStickyNav = function (entries) {
        const [entry] = entries;
        console.log(entry);
        if (!entry.isIntersecting) setIsSticky(true);
        else setIsSticky(false);
    };

    // useEffect(()=>{
    //     const header = headerRef.current;
    // }, []);


    useEffect(()=>{
        const header = headerRef.current;
        setNavHeight(header.getBoundingClientRect().height);
        console.log(navHeight);
        const headerObserver = new IntersectionObserver(toggleStickyNav, {
            root: null,
            threshold: 0,
            rootMargin:  `${navHeight}px`
        });
        headerObserver.observe(header);
    }, []);


    return (
        <div className="home-container">
            <div className="nav-container">
                <Navbar isSticky={isSticky}/>
            </div>

        <div ref={headerRef} className="home-banner-container">
                <img className="bg-img" src={bgHome}  alt=""/>
            <div className="home-text-section">
                <h1 className="primary-heading">ENACTUS INSAT</h1>
                <p className="primary-text">
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}                </p>

                <div
                className="buttons">
                    <button className="fund-button">
                        Fund Us
                    </button>

                    <button className="contact-button">
                        Contact Us
                    </button>
                </div>

            </div>

        </div>


    </div>
    );
}
export default Home;