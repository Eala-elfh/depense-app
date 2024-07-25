import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo2 from '../pictures/MoneyGram.png';
import home from '../icons/home.png';
import flash from'../icons/flash.png';
import menu from '../icons/menu.png';
import report from '../icons/report.png';
import line from '../icons/blackline.png';
import profile from '../icons/user.png';



import '../style/Navbar.css'
import Dashboard from "./Dashboard";
function NavBar(){
    return(
        <div className="navbar">          
            <img src={logo2} className="logo1" alt="appLogo"/><br/>
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
            </div><br/>

            <img src={line} className="icons1" alt="blackline"/><br/>
            <div className="icon-container">
                <Link to='/settings'>
                <img src={profile} className="icons1" alt="profile"/>
                <span className="icon-label">Profile Settings</span>
                </Link>
            </div><br/>
        </div>
    );
}

export default NavBar;
