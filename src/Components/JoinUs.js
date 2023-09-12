import React,{useState} from 'react';
import '../Styles/JoinUs.css';
import Origami1 from "../Assets/icons/Origami1.svg"
import Origami2 from "../Assets/icons/Origami2.svg"
import Blush1 from "../Assets/icons/Blush1.svg"
import Blush2 from "../Assets/icons/Blush2.svg"



import mailicon from "../Assets/icons/mail.SVG"

// eslint-disable-next-line react-hooks/rules-of-hooks


const Form =(props) => {


    const [firstNameState,setfirstNameState]=useState(0)
    const [lastNameState,setlastNameState]=useState(0)
    const [fb,setfb]=useState(0)
    const [tel,settel]=useState(0)
    const [mail,setmail]=useState(0)
    const [filiere,setfiliere]=useState(0)
    const [niveau,setniveau]=useState(0)
    const  formHandler = (e) => {
          e.preventDefault()
        var form = document.getElementById('sheetdb-form');
        let lastName=document.querySelector("#lastName").value;
        let firstName=document.querySelector("#firstName").value;
        let facebookProfile=document.querySelector("#facebookProfile").value;
        let phoneNumber=document.querySelector("#PhoneNumber").value;
        let email=document.querySelector("#email").value;
        let select1=document.querySelector("#select1").value;
        let select2=document.querySelector("#select2").value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const phonePattern =/^\d{8}$/
        let check=true
        if (firstName===""){
            setfirstNameState(1)
            check=false

        }else {
            setfirstNameState(0)
        }
        if (lastName===""){setlastNameState(1)
            check=false
        }else {
            setlastNameState(0)

        }
        if (facebookProfile===""){setfb(1)
            check=false
        }else {setfb(0)
        }
        if (email==="" || !emailPattern.test(email)){setmail(1)
            check=false
        }else {
            setmail(0)
        }
        if (select1==="Select Your Studies Field"){setfiliere(1)
            check=false
        }else {
           setfiliere(0)
        }
        if (select2==="Select Studies’ Year"){setniveau(1)
            check=false
        }else {
            setniveau(0)
        }
        if (phoneNumber==="" || !phonePattern.test(phoneNumber)){settel(1)
            check=false
        }else {
            settel(0)
        }






     if (check) {props.setFormToggle(true);
         fetch(form.action, {
             method : "POST",
             body: new FormData(document.getElementById("sheetdb-form")),
         }).then();
     }}





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

                                        <input type="text" className="form-control" id="firstName" placeholder="First Name" name="data[firstName]"  />
                                        {firstNameState===1 ?   <div className={"mail-notif"}>
                                            <img src={mailicon} alt=""/>
                                            Your first Name is not valid
                                        </div> : null }
                                    </div>




                                    <div className="col-md-6 ">
                                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" name="data[LastName]" />
                                        {lastNameState===1 ?   <div className={"mail-notif"}>
                                            <img src={mailicon} alt=""/>
                                            Your last Name is not valid
                                        </div> : null }
                                    </div>

                                </div>


                                <div className="mb-3">
                                    <input type="text" className="form-control" id="facebookProfile" placeholder="Facebook Profile" name={"data[Facebook]"} />
                                    {fb===1 ?   <div className={"mail-notif"}>
                                        <img src={mailicon} alt=""/>
                                        Your facebook profile is not valid
                                    </div> : null }
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="PhoneNumber" placeholder="PhoneNumber" name={"data[num]"} />
                                    {tel===1 ?   <div className={"mail-notif"}>
                                        <img src={mailicon} alt=""/>
                                        Your phone number is not valid
                                    </div> : null }
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="E-mail" name={"data[email]"}/>
                                    {mail===1 ?   <div className={"mail-notif"}>
                                        <img src={mailicon} alt=""/>
                                        Your e-mail adress is not valid
                                    </div> : null }
                                </div>
                                <div className={"mail-notif1"}>

                                    You'll be sent an email containing a preselection form.
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <select className="form-select custom-select" id="select1" defaultValue="Select Your Studies Field" name={"data[filiére]"}  >
                                            <option value="Select Your Studies Field" disabled>Select Your Studies Field</option>
                                            <option value="MPI">MPI</option>
                                            <option value="CBA">CBA</option>
                                            <option value="GL">GL</option>
                                            <option value="RT">RT</option>
                                            <option value="IIA">IIA</option>
                                            <option value="IMI">IMI</option>
                                            <option value="BIO">BIO</option>
                                            <option value="CH">CH</option>
                                        </select>
                                        {filiere===1 ?   <div className={"mail-notif"}>
                                            <img src={mailicon} alt=""/>
                                            Your study field is not valid
                                        </div> : null }
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
                                        {niveau===1 ?   <div className={"mail-notif"}>
                                            <img src={mailicon} alt=""/>
                                            Your study year is not valid
                                        </div> : null }
                                    </div>
                                </div>
                                <div className={"join-remember"}>
                                    <div>See You Soon 💛</div>
                                    <button type="submit" className="btn btn-primary" >Submit</button>
                                </div>

                            </form>
                        </div>

                    </div>



            </>
        );

}

export default Form;
