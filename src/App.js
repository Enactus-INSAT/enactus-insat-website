import "./App.css"
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Vision from "./Components/Vision";
import Numbers from "./Components/Numbers";
import Newsletter from "./Components/NewsLetter";
import Projects from "./Components/Projects";
import Activity from "./Components/Activity";
import Actualites from "./Components/Actualites";
import JoinUs from "./Components/JoinUs";
import React, { useState} from "react";
import Recrutement from "./Assets/images/Recrutement.png"
import RecrutementPhone from "./Assets/images/Group 8996.png"
function App(props) {
    const [language,setLanguage]=useState("fr")
    const [formToggle,setformToggle] = useState(false);
    const IMG= window.innerWidth >= 500 ? Recrutement : RecrutementPhone;
    return (
        <>
            {formToggle === true ? (
                <div className={"div-recru"}>
                <img src={IMG} alt="" className={"image-recru"}/>
                    <button type="reset" className="btn btn-primary bouton-recru" onClick={()=>{setformToggle(false)}}>Return To Website</button>
                </div>
            ) : (
                <div>
                    <Home language={language} setLanguage={setLanguage} />
                    <JoinUs formToggle={formToggle} setFormToggle={setformToggle} />
                    <Numbers language={language} />
                    <Vision language={language} />
                    <Activity language={language} />
                    <Projects language={language} />
                    <Actualites language={language} />
                    <Newsletter language={language} />
                    <Footer language={language} />
                </div>
            )}
        </>
    );
}

export default App;
