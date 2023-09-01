import "./App.css"
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Vision from "./Components/Vision";
import Numbers from "./Components/Numbers";
import Newsletter from "./Components/NewsLetter";
import Projects from "./Components/Projects";
import Activity from "./Components/Activity";
import Actualites from "./Components/Actualites";
import { useState} from "react";
function App(props) {
    const [language,setLanguage]=useState("fr")
    return (
        <div>
            <Home language={language} setLanguage={setLanguage}/>
            <Numbers language={language}/>
            <Vision language={language}/>
            <Activity language={language}/>
            <Projects language={language}/>
            <Actualites language={language}/>
            <Newsletter language={language}/>
            <Footer language={language}/>
        </div>
    );
}

export default App;
