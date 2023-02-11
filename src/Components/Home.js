import React from "react";
import Navbar from "./Navbar";
import "../Styles/Home.css"
import bgHome from "../Assets/images/bg-home.jpg"

const Home = () => {
    return (
        <div className="home-container">
            <div className="nav-container">
                <Navbar/>
            </div>

        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img className="bg-img" src={bgHome}  alt=""/>
            </div>
        </div>


    </div>
    );
}
export default Home;