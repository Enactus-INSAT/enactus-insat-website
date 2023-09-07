import '../Styles/Footer.css'
import logoEnactus from "../Assets/logos/enactus.png"
import logoFacebook from "../Assets/logos/facebook-logo.svg"
import {BsInstagram} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
import {GrLinkedinOption} from "react-icons/gr";
import Origami from"../Assets/logos/origami.svg"


export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-Origami-container">
                <img className='logo-Origami' src={Origami} width="100%" height="100%"></img>
            </div>

            <div className='footer-info'>
                <div className="footer-logo-container">
                    <img className='logo-enactus' src={logoEnactus} width="100%"></img>
                </div>
                {window.innerWidth>500 ?  <div className='contact'>

                    <div className='title'>
                        CONTACT
                    </div>
                    <div className='contact-text'>
                        Team Leader : 56 571 610 <br/>
                        Marketing : 24 555 129 <br/>
                        Fundraising : 92 733 266 <br/>
                        Human Resources : 92 268 886 <br/>
                        Vice President Projects : 29 161 888 <br/>
                    </div>
                </div> : null}

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
                <div className='facebook-logo' onClick={()=>{window.open("https://www.facebook.com/enactusinsat", "_blank")}}
                     >
                    <img src={logoFacebook}></img>
                </div>
                <div className='gmail-logo' onClick={()=>{window.open("https://mail.google.com/mail/u/0/?fs=1&to=enactusinsat@gmail.com&tf=cm", "_blank")}}>
                    <SiGmail/>
                </div>
                <div className='insta-logo'onClick={()=>{window.open("https://www.instagram.com/enactus_insat/", "_blank")}}>
                    <BsInstagram/>
                </div>
                <div className='linkedin-logo'onClick={()=>{window.open("https://fr.linkedin.com/company/enactus-insat?trk=public_profile_volunteering-position_profile-section-card_full-click", "_blank")}}>
                    <GrLinkedinOption/>
                </div>

            </div>

        </div>
    );
}