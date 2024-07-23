import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usericon from '../icons/login.png';
import passwordicon from '../icons/hide.png';
import line from '../icons/line.png';
import Google from '../icons/google.png';
import { login } from '../services/apiService.js'; 


function LoginForm() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const HandleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const HandlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await login({ email: Email, password: Password });

      if (response.data === "True") { 
        setMessage("Welcome back, user!");
        navigate('/dashboard');
      } 
      else {
        setMessage("Invalid credentials, TRY AGAIN!");
      }
    }
     catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <form className='form1' onSubmit={handleSubmit}>
        <img src={usericon} className='icons' alt='User icon'/>
        <input type='text' placeholder='Email or Phone number' value={Email} onChange={HandleEmailChange} /> <br/>
        <img src={line} className='line' alt='Line'/> <br/>
        <img src={passwordicon} className='icons' alt='Password icon'/>
        <input type='password' placeholder='Password' value={Password} onChange={HandlePasswordChange} /> <br/>
        <img src={line} className='line' alt='Line'/> <br/>
        <Link to='/forgot' className='forgot_password'>Forgot password?</Link><br/>
        <button className='button' type="submit">Login</button>
      </form>
      {message && <h1>{message}</h1>} {/* This will display the message */}
      <h6>Don't have an account?</h6>
      <Link to='/signup' className="sign_up">Sign Up</Link>
      <p>OR</p><br/>
      <img src={Google} className="icons" alt='Google icon'/>
      <button className="google_button">Login with Google</button>
    </div>
  );
}

export default LoginForm;
