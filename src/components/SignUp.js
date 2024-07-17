import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import usericon from '../icons/login.png';
import passwordicon from '../icons/hide.png';
import line from '../icons/line.png';
import checkIcon from '../icons/checkIcon.png';
import Google from '../icons/google.png';

import users from "../Dummydata/users.json";


function SignUp(){
  const [Email ,setEmail] = useState('');
  const [password1 , setpassword1] = useState('');
  const [password2 , setpassword2] = useState('');
  const [Message,setMessage] =useState('');
  const Navigate = useNavigate();

  const HandleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const Handlepassword1Change = (event) => {
    setpassword1(event.target.value);
  }
  const Handlepassword2Change = (event) => {
    setpassword2(event.target.value);
  }

  const handleSubmit = (event) =>  {
    event.preventDefault(); 
    let idgenerator = users.length +1;
    const user=users.find(user => user.email === Email); 
    const newuser= {id: idgenerator , password:password1 , email:Email};
    

    if(!user){
    if (password1===password2){
      setMessage("Your account has been succesfully created ");
      users.concat(newuser);

      Navigate('/dashboard');

    }
    else{
      setMessage(" Make sure that the 2 passwords are identical !");
    }
  }
  else{
    setMessage('This email is already used in another account !');
  }
  }
 

    return(
        <div>
<form className='form4' onSubmit={handleSubmit}>
  <img src={usericon} className='icons'/>
  <input type='text' placeholder='Email or Mobile number' value={Email} onChange={HandleEmailChange}/> <br/>
  <img src={line} className='line'/> <br/>
  <img src={passwordicon} className='icons'/>
  <input type='password' placeholder='Create password' value={password1} onChange={Handlepassword1Change} /> <br/>
  <img src={line} className='line'/> <br/>
  <img src={checkIcon} className='icons'/>
  <input type='password' placeholder='Confirm password' value={password2} onChange={Handlepassword2Change} /> <br/>
  <img src={line} className='line'/> <br/>

  <button className='button' type="submit"> Sign Up </button>
  </form>
  {Message && <h1>{Message}</h1>} 

  <h6> already have an account ? </h6>
  <Link to='/' className="sign_up"> Login</Link>
  <p> OR </p><br/>
  <img src={Google} className="icons"></img>
  <button className="google_button"> Sign Up with google </button>

  </div>

    );
}

export default SignUp;