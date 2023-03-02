import React, {useState} from "react";
import "./Contact.css";
import contactImg from "../images/myCvImage5.jpg";
import { useForm } from 'react-hook-form';

const Contact = () => {
  const[input1,setInput1]=useState("");
  const[input2,setInput2]=useState("");
  const[input3,setInput3]=useState("");
  const[input4,setInput4]=useState("");
  // const [postData, setPostData] = useState([]);

  
  const {
    trigger,
  } = useForm();

  const onSubmit = async(e)=>{
    const isValid = await trigger();
    if (!isValid){
        e.preventDefault();
    }
    // const data={
    //   input1:input1,
    //   input2:input2,
    //   input3:input3,
    //   input4:input4,
    // };
    // setPostData([...postData, data])
    // setInput1('');
    // setInput2('');
    // setInput3('');
    // setInput4('');
  }

  const buttonHandler = ()=>{
   
    if(input1==="" || input2===" " || input3==="" || input4==="")
     return(
       alert("Fill up form")
     );
     if(input1!=="" || input2!==" " || input3!=="" || input4!=="")
     return(
       alert("Submitted :"+input1 +"  "+input2+" "+input3+"  "+input4))
     ;
  };

  const input1Handler = (event) => {
    setInput1(event.target.value);
  };
  const input2Handler = (event) => {
    setInput2(event.target.value);
  };
  const input3Handler = (event) => {
    setInput3(event.target.value);
  };
  const input4Handler = (event) => {
    setInput4(event.target.value);
  };

  return (
    <div className="contact-component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me</h1>
              <p className="hire__text white">
                I'm ready to start. Contact with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+27687070925 </strong>
                <strong>or email</strong><br/>
               <a href="https://mail.google.com/"><strong>anesumuusha@gmail.com</strong></a><br/>
                {/* <strong>anesumuusha@gmail.com</strong> */}
              </p>

                <div className="input__box">
                <form 
    target="_blank"
    onSubmit={onSubmit}
    action='https://formsubmit.co/anesumuusha@gmail.com'
    method='POST'
    >
                <input onChange={input1Handler}  value={input1} name='username' type="text"  id="userName" className="contact name" placeholder="your name *"/>
                <input onChange={input2Handler}  value={input2} name='email' type="email" id="email" className="contact email" placeholder="email *"/>
                <input onChange={input3Handler}  value={input3} name="subject" type="text" id="subject" className="contact subject" placeholder="write a subject"/>
                <textarea onChange={input4Handler} value={input4} name="message" id="message" placeholder="write your message">
                 </textarea>
                <button onClick={buttonHandler} className="btn contact pointer" type="submit" >Submit</button>
                </form>
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
