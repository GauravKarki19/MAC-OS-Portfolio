import React from 'react'
import './Nav.scss';
import DateTime from './DateTime';

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="../../public/navbar-icons/apple.svg" alt="" />
            </div>
            <div className="nav-item">
                <p>Gaurav Karki</p>
            </div>
            <div className="nav-item">
                <p>File</p>
            </div>
            <div className="nav-item">
                <p>Window</p>
            </div>
            <div className="nav-item">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="battery-icon">
                <img src="../../public/navbar-icons/battery.png" alt="" />
            </div>
            <div className="wifi-icon">
                <img src="../../public/navbar-icons/wifi.svg" alt="" />
            </div>
            <div className="nav-icon">
                <DateTime/>
            </div>
            
        </div>
    </nav>
  )
}

export default Nav;
