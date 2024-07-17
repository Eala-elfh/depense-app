import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import passwordicon from '../icons/hide.png';
import line from '../icons/line.png';
import login from '../icons/login.png';
import Button from '@mui/material/Button';// materialUI

import users from '../Dummydata/users.json';


function NewPassword(){
    const [Email,setEmail] = useState('');
    const [password1,setpassword1] = useState('');
    const [password2,setpassword2] = useState('');
    const [Message,setMessage] = useState('');
    const Navigate = useNavigate();
  
  const handleEmailchange = (event)=> {
  setEmail(event.target.value);
  }
  const handlepassword1change = (event) => {
    setpassword1(event.target.value);
  }
  const handlepassword2change = (event) => {
    setpassword2(event.target.value);
  }
  const handleSubmit= (event) =>{
    event.preventDefault(); 
    const user = users.find(user => user.email===Email);
    if (user){
    if (password1===user.password || password2===user.password){
      setMessage("This password has been used before, TRY ANOTHER ONE!");
    }
    else{
      if( password1===password2){
        setMessage("Your password has been changed succesfully");
        Navigate('/dashboard');

      }
      else{
        setMessage("Verify that the 2 passwords are identical");
      }
    }
    }
    else{
      setMessage("This email is not connected to any account !")
    }
  }
  
    return(
      <div>
      <h3 className='title'> Forgotten password? </h3>
      <form className='form3' onSubmit={handleSubmit}>
      <img src={login} className="icons"/>
      <input type='text' placeholder='Set Email' value={Email} onChange={handleEmailchange}/> <br/>
      <img src={line} className='line'/> <br/>

      <img src={passwordicon} className='icons'/>
      <input type='password' placeholder='New password' value={password1} onChange={handlepassword1change}/> <br/>
      <img src={line} className='line'/> <br/>

      <img src={passwordicon} className='icons'/>
      <input type='password' placeholder='Confirm password'value={password2} onChange={handlepassword2change} /> <br/>
      <img src={line} className='line'/> <br/>
      <br/>
      <button variant="contained" className="button" type="submit">Save changes</button>
      </form>
      {Message && <h1>{Message}</h1>}      </div>
    );
    
  }
  export default NewPassword;