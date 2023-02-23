import '../Styles/Footer.css'
import logoEnactus from "../Assets/logos/enactus.png"
import logoFacebook from "../Assets/logos/facebook-logo.svg"
import {BsInstagram} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
import {GrLinkedinOption} from "react-icons/gr";


export default function Footer() {
    return (
        <div className="footer-container">
            <div className='footer-info'>
                <div className="footer-logo-container">
                    <img className='logo-enactus' src={logoEnactus} width="100%"></img>
                </div>
                <div className='contact'>
                    <div className='title'>
                        CONTACT
                    </div>
                    <div className='contact-text'>
                        Team Leader : XX XXX XXX <br/>
                        Marketing : XX XXX XXX <br/>
                        Fundraising : XX XXX XXX <br/>
                        Human Resources : XX XXX XXX <br/>
                        Vice President Projects : XX XXX XXX <br/>
                    </div>
                </div>
                <div className='address'>
                    <div className='title'>
                        ADRESSE
                    </div>
                    <div className='address-text'>
                        INSAT, Centre Urbain Nord, Tunis
                    </div>
                </div>
            </div>
            <div className='social-media'>
                <div className='text'>
                    Contact us
                </div>
                <div className='vertical-line-footer'></div>
                <div className='facebook-logo'>
                    <img src={logoFacebook}></img>
                </div>
                <div className='gmail-logo'>
                    <SiGmail/>
                </div>
                <div className='insta-logo'>
                    <BsInstagram/>
                </div>
                <div className='linkedin-logo'>
                    <GrLinkedinOption/>
                </div>

            </div>
        </div>
    );
}