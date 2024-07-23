import React from "react";
import logo2 from '../pictures/MoneyGram.png';
import home from '../icons/home.png';
import flash from'../icons/flash.png';
import menu from '../icons/menu.png';
import report from '../icons/report.png';
import line from '../icons/blackline.png';
import profile from '../icons/user.png';

import '../style/Navbar.css'
function NavBar(){
    return(
        <div className="navbar">          
            <img src={logo2} className="logo1" alt="appLogo"/><br/>
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
            </div><br/>

            <img src={line} className="icons1" alt="blackline"/><br/>
            <div className="icon-container">
                <img src={profile} className="icons1" alt="profile"/>
                <span className="icon-label">Profile</span>
            </div><br/>
        </div>
    );
}

export default NavBar;
