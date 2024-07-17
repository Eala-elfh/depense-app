import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import usericon from '../icons/login.png';
import passwordicon from '../icons/hide.png';
import line from '../icons/line.png';
import Google from '../icons/google.png';

import users from '../Dummydata/users.json'

function LoginForm(){
  const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const HandleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const HandlePasswordChange= (event)=> {
    setPassword(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Form submitted"); 

    const user = users.find(user => user.email === Email); 
    console.log({user})

    if (user) {
      if (Password===user.password){
      setMessage("Welcome back, user!");
      navigate('/dashboard');

      }
      else {
      setMessage("Invalid password, TRY AGAIN!");
      }}
      else{
        setMessage("Invalid User!")
      }
  };

  
    return (
        <div>
        <form className='form1' onSubmit={handleSubmit}>
        <img src={usericon} className='icons'/>
        <input type='text' placeholder='Email or Phone number' value={Email}  onChange={HandleEmailChange} /> <br/>
        <img src={line} className='line'/> <br/>
        <img src={passwordicon} className='icons'/>
        <input type='password' placeholder='Password' value={Password}  onChange={HandlePasswordChange}  /> <br/>
        <img src={line} className='line'/> <br/>
        <Link to='/forgot' className='forgot_password'>forgot password?</Link><br/>
        <button className='button' type="submit">Login</button>
        </form>
        {message && <h1>{message}</h1>} {/* This will display the message */}

  <h6> don't have an account ? </h6>
  <Link to='/signup' className="sign_up"> Sign Up</Link>
  <p> OR </p><br/>
  <img src={Google} className="icons"></img>
  <button className="google_button"> Login with google </button>

  </div>
    );
  }

  export default LoginForm;