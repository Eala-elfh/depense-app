import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
=======
>>>>>>> b6a4d09e6083a7717d7d73169843c7dd8620ea05
import logo2 from '../pictures/MoneyGram.png';
import home from '../icons/home.png';
import flash from'../icons/flash.png';
import menu from '../icons/menu.png';
import report from '../icons/report.png';
import line from '../icons/blackline.png';
import profile from '../icons/user.png';

<<<<<<< HEAD


import '../style/Navbar.css'
import Dashboard from "./Dashboard";
=======
import '../style/Navbar.css'
>>>>>>> b6a4d09e6083a7717d7d73169843c7dd8620ea05
function NavBar(){
    return(
        <div className="navbar">          
            <img src={logo2} className="logo1" alt="appLogo"/><br/>
<<<<<<< HEAD
            <img src={line} className="icons1" alt="blackline" onClick={<Dashboard/>}/><br/>

            <div className="icon-container">
                <Link to='/dashboard'>
                <img src={home} className="icons1" alt="homeicon"/>
                <span className="icon-label" >Home</span>
                </Link>
            </div><br/>
            <div className="icon-container">
                <Link to='statistics'>
                <img src={flash} className="icons1" alt="flashicon"/>
                <span className="icon-label" >Statistics</span>
                </Link>
            </div><br/>
            <div className="icon-container">
                <Link to='/add'>
                <img src={menu} className="icons1" alt="menuicon"/>
                <span className="icon-label">Income/Depense</span>
                </Link>
            </div><br/>
            <div className="icon-container">
                <Link to='/report'>
                <img src={report} className="icons1" alt="reporticon"/>
                <span className="icon-label" >Report</span>
                </Link>
=======
            <img src={line} className="icons1" alt="blackline"/><br/>

            <div className="icon-container">
                <img src={home} className="icons1" alt="homeicon"/>
                <span className="icon-label">Home</span>
            </div><br/>
            <div className="icon-container">
                <img src={flash} className="icons1" alt="flashicon"/>
                <span className="icon-label">Flash</span>
            </div><br/>
            <div className="icon-container">
                <img src={menu} className="icons1" alt="menuicon"/>
                <span className="icon-label">Menu</span>
            </div><br/>
            <div className="icon-container">
                <img src={report} className="icons1" alt="reporticon"/>
                <span className="icon-label">Report</span>
>>>>>>> b6a4d09e6083a7717d7d73169843c7dd8620ea05
            </div><br/>

            <img src={line} className="icons1" alt="blackline"/><br/>
            <div className="icon-container">
<<<<<<< HEAD
                <Link to='/settings'>
                <img src={profile} className="icons1" alt="profile"/>
                <span className="icon-label">Profile Settings</span>
                </Link>
=======
                <img src={profile} className="icons1" alt="profile"/>
                <span className="icon-label">Profile</span>
>>>>>>> b6a4d09e6083a7717d7d73169843c7dd8620ea05
            </div><br/>
        </div>
    );
}

export default NavBar;
