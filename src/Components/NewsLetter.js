import React from "react";
import '../Styles/NewsLetter.css';
import Rectangle from "../Assets/images/Rectangle.svg";
import EmailImg from"../Assets/images/EMAIL.png"

function newsLetter(props) {
    const sendHandler=()=>{

        window.location = `mailto:enactusinsat@gmail.com`;

    }
    return (
        <>
            <div className="container-out">
                <div className="container-in">
                    <div className="containerleft">
                        <div className="Subscribe" id="contact">{props.language==="fr" ?"ENVOYER NOUS UN EMAIL":"SEND US AN EMAIL"}</div>

                        <div className="containerform">

                            <button className="bouton" onClick={() => window.open("https://mail.google.com/mail/u/0/?fs=1&to=enactusinsat@gmail.com&tf=cm", "_blank")   } >
                                {props.language==="fr" ? "ENVOYER":
                                "SEND"}</button>

                        </div>
                        <div className="privacy">{props.language==="fr" ?"Votre mail ne sera jamais partagé" :"We'll never share your email with anyone else" }</div>
                    </div>
                    <div className="imagenewsletter"><img src={Rectangle} width="100%"></img></div>
                </div>
            </div>
        </>
    );
}

export default newsLetter;