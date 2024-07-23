import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import passwordicon from '../icons/hide.png';
import line from '../icons/line.png';
import login from '../icons/login.png';
import { getAllUsers, updateUser } from '../services/apiService.js'; // Ensure this path is correct

function NewPassword() {
  const [Email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [Message, setMessage] = useState('');
  const Navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword1Change = (event) => {
    setPassword1(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // we need a new api : getbyEmail
      const response = await getAllUsers();
      const users = response.data;
      const user = users.find(user => user.email === Email);

      if (user) {
        if (password1 === password2) {
          if (password1 !== user.password) {
            user.password = password1;
            await updateUser(user);
            setMessage("Your password has been changed successfully.");
            Navigate('/dashboard');
          } else {
            setMessage("This password has been used before. Try another one!");
          }
        } else {
          setMessage("Verify that the two passwords are identical.");
        }
      } else {
        setMessage("This email is not connected to any account.");
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <h3 className='title'>Forgotten password?</h3>
      <form className='form3' onSubmit={handleSubmit}>
        <img src={login} className="icons" alt="Login icon" />
        <input
          type='text'
          placeholder='Set Email'
          value={Email}
          onChange={handleEmailChange}
        /> <br/>
        <img src={line} className='line' alt='Line'/> <br/>
        <img src={passwordicon} className='icons' alt="Password icon" />
        <input
          type='password'
          placeholder='New password'
          value={password1}
          onChange={handlePassword1Change}
        /> <br/>
        <img src={line} className='line' alt='Line'/> <br/>
        <img src={passwordicon} className='icons' alt="Password icon" />
        <input
          type='password'
          placeholder='Confirm password'
          value={password2}
          onChange={handlePassword2Change}
        /> <br/>
        <img src={line} className='line' alt='Line'/> <br/>
        <br/>
        <button className="button" type="submit">Save changes</button>
      </form>
      {Message && <h1>{Message}</h1>}
    </div>
  );
}

export default NewPassword;
