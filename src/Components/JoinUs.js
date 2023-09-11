import React,{useState} from 'react';
import '../Styles/JoinUs.css';
import Origami1 from "../Assets/icons/Origami1.svg"
import Origami2 from "../Assets/icons/Origami2.svg"
import Blush1 from "../Assets/icons/Blush1.svg"
import Blush2 from "../Assets/icons/Blush2.svg"



import mailicon from "../Assets/icons/mail.SVG"

// eslint-disable-next-line react-hooks/rules-of-hooks


const Form =(props) => {


    const  formHandler = (e) => {
        var form = document.getElementById('sheetdb-form');
        e.preventDefault();
        fetch(form.action, {
            method : "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then((html) => {
            // you can put any JS code here
            props.setFormToggle(true);
           console.log("form submitted");

        });
    }



        return (<>


                    <div className={"form-container"}>
                        <img src={Origami1} alt="" className="Origami1"/>
                        <img src={Origami2} alt="" className={"Origami2"}/>
                        <img src={Origami1} alt=""  className={"Origami3"}/>
                        <img src={Blush1} alt="" className={"Blush1"}/>
                        <img src={Blush2} alt="" className={"Blush2"}/>

                        <div className="projects-section-heading-container" id={"vision"}>

                            <div className="activities-section-heading">
                                <div className="a-h-line" ></div>
                                <div className="section-heading" >Join Our Team Now!</div>
                                <div className="a-h-line" ></div>
                            </div>
                            <div className={"join-description"}>Are you passionate about the world of entrepreneurship, and want to be part of a dynamic team
                                creating innovative projects that address society's problems? Then you've come to the right place.</div>

                        </div>
                        <div className="integration-form container">


                            <form action={"https://sheetdb.io/api/v1/yq0iosbh887u1"} method={"post"} id={"sheetdb-form"} onSubmit={(e)=>{formHandler(e)}}>
                                <div className="row mb-3">
                                    <div className="col-md-6">

                                        <input type="text" className="form-control" id="firstName" placeholder="First Name" name="data[firstName]" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" name="data[LastName]" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="facebookProfile" placeholder="Facebook Profile" name={"data[Facebook]"} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="PhoneNumber" placeholder="PhoneNumber" name={"data[num]"} />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="E-mail" name={"data[email]"}/>
                                </div>
                                <div className={"mail-notif"}>
                                    <img src={mailicon} alt=""/>
                                    You will recieve an e-mail to choose the date of your interview.
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <select className="form-select custom-select" id="select1" defaultValue="Select Your Studies Field" name={"data[filiére]"}  >
                                            <option value="Select Your Studies Field" disabled>Select Your Studies Field</option>
                                            <option value="MPI"   onClick={()=>{console.log("tesst")}}>MPI</option>
                                            <option value="CBA">CBA</option>
                                            <option value="GL">GL</option>
                                            <option value="RT">RT</option>
                                            <option value="IIA">IIA</option>
                                            <option value="IMI">IMI</option>
                                            <option value="BIO">BIO</option>
                                            <option value="CH">CH</option>
                                        </select>

                                    </div>
                                    <div className="col-md-6">
                                        <select className="form-select custom-select" id="select2" defaultValue="Select Studies’ Year" name={"data[niveau]"}>
                                            <option value="Select Studies’ Year" disabled>Select Studies’ Year</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={"join-remember"}>
                                    <div>Don't forget to choose a date for your interview by Mail 💛</div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>

                            </form>
                        </div>

                    </div>



            </>
        );

}

export default Form;
