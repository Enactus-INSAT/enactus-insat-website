import React from "react";
import '../Styles/NewsLetter.css';
import Rectangle from "../Assets/images/Rectangle.svg";

function newsLetter() {
    return (
        <>
            <div className="container-out">
                <div className="container-in">
                    <div className="containerleft">
                        <div className="Subscribe" id="contact">SUBSCRIBE TO OUR NEWSLETTER</div>
                        <div className="email">Email adress</div>
                        <div className="containerform">
                            <input type="text" placeholder="  Email*" className="form"></input>
                            <div className="bouton">Submit</div>

                        </div>
                        <div className="privacy">We'll never share your email with anyone else</div>
                    </div>
                    <div className="imagenewsletter"><img src={Rectangle} width="100%"></img></div>
                </div>
            </div>
        </>
    );
}

export default newsLetter;