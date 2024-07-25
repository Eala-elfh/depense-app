import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usericon from '../icons/login.png';
import passwordicon from '../icons/hide.png';
import line from '../icons/line.png';
import checkIcon from '../icons/checkIcon.png';
import Google from '../icons/google.png';
import gender from '../icons/gender.png';
import phoneNumber from '../icons/phonenumber.png';
import upload from '../icons/upload.png';

import { signUp } from "../services/apiService.js"; 

function SignUp() {
  const [Email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [Gender, setGender] = useState('');
  const [Phone, setPhone] = useState('');
  const [Profile, setProfile] = useState('');
  const [Message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword1Change = (event) => {
    setPassword1(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleProfileChange = (event) => {
    setProfile(event.target.files[0]); // For file 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password1 === password2) {
      
      /*if (Profile) {
        formData.append('profile', Profile); // Append the file
      }*/
      try {
        const response = await signUp({email: Email , password:password1, gender:Gender, phoneNumber:Phone});

        if (response.status === 201) { //  201 Created
          setMessage("Your account has been successfully created.");
          navigate('/dashboard');
        } else if (response.status === 400) { //400 Bad Request
          setMessage('This email is already used in another account!');
        } else {
          setMessage('An unexpected error occurred. Please try again.');
        }
      } catch (error) {
        setMessage('An error occurred. Please try again.');
        console.error("There was an error!", error);
      }
    } else {
      setMessage("Make sure that the 2 passwords are identical!");
    }
  };

  return (
    <div>
      <form className='form4' onSubmit={handleSubmit}>
        <img src={usericon} className='icons' alt='User icon' />
        <input 
          type='text' 
          placeholder='Email' 
          value={Email} 
          onChange={handleEmailChange} 
        /> <br/>
        <img src={line} className='line' alt='Line'/> <br/>
        <img src={passwordicon} className='icons' alt='Password icon' />
        <input 
          type='password' 
          placeholder='Create password' 
          value={password1} 
          onChange={handlePassword1Change} 
        /> <br/>
        <img src={line} className='line' alt='Line'/> <br/>
        <img src={checkIcon} className='icons' alt='Check icon' />
        <input 
          type='password' 
          placeholder='Confirm password' 
          value={password2} 
          onChange={handlePassword2Change} 
        /> <br/>
        <img src={line} className='line' alt='Line'/> <br/>

        <img src={gender} className='icons' alt='Gender icon' />
        <select 
          placeholder='Gender' 
          value={Gender} 
          onChange={handleGenderChange} 
        > 
         <option value="">Select Gender</option>
         <option value="male">Male</option>
         <option value="female">Female</option>
        </select> <br/>
        <img src={line} className='line' alt='Line'/> <br/>

        <img src={phoneNumber} className='icons' alt='gender icon' />

        <input 
          type='text' 
          placeholder='Phone Number' 
          value={Phone} 
          onChange={handlePhoneChange} 
        /> <br/>
        <img src={line} className='line' alt='Line'/> <br/>
{/*
        <img src={upload} className="icons" alt="Upload icon"/>
         
          <input 
          type='file' 
          placeholder='Add profile image' 
          onChange={handleProfileChange} 
        /> <br/>
        <img src={line} className='line' alt='Line'/> <br/>
*/}

        <button className='button' type="submit">Sign Up</button>
      </form>
      {Message && <h1>{Message}</h1>} 

      <h6>Already have an account?</h6>
      <Link to='/' className="sign_up">Login</Link>
      <p>OR</p><br/>
      <img src={Google} className="icons" alt='Google icon' />
      <button className="google_button">Sign Up with Google</button>
    </div>
  );
}

export default SignUp;
