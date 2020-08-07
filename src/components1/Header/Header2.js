import React from 'react';
import './Header.css';
import logo from './WisdomCoalition.jpg'

function Header2() {
  return (
    <div class="header">   
        <div class="logo">
            <img src={logo} alt="Wisdom Coalition"></img>    
        </div>    
        <div class="title">
            Reboot You
        </div>
    </div> 
  );
}

export default Header2;
