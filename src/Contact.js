import React from "react";
import "./Contact.css";
import contactImg from "./images/myCvImage5.jpg"
//import * as yup from "yup"; 
import { userSchema } from "./Validations/UserValidation";

const Contact = () => {

const documentRequest =async(e)=>{
e.preventDefault()
let formData ={
userName:e.target[0].value,
email:e.target[1].value,
subject:e.target[2].value,
message:e.target[3].value,
};
console.log(formData);
const isValid = await userSchema.isValid(formData)
console.log(isValid);
};

  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me</h1>
              <p className="hire__text white">
                I'm ready to start. Contantact with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+27687070925 </strong>
                <strong>or email</strong>
                <strong>anesumuusha@gmail.com</strong>
              </p>

                <div className="input__box">
                <input type="text" id="userName" className="contact name" placeholder="your name *"/>
                <input type="text" id="email" className="contact email" placeholder="email *"/>
                <input type="text" id="subject" className="contact subject" placeholder="write a subject"/>
                <textarea name="message" id="message" placeholder="write your message"></textarea>
                <button onSubmit={documentRequest} className="btn contact pointer" type="submit">Submit</button>
                </div>

            </div>
          </div>
        </div>
        <div className="col__2">
            <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
