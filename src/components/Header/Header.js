import React from 'react';
import './Header.css';
import logo from './WisdomCoalition.jpg'

function Header() {
  return (
    <div class="header">   
        <div class="logo">
            <img src={logo} alt="Wisdom Coalition"></img>    
        </div>    
        <div class="title">
            Filling In The Missing Peace
        </div>
    </div> 
  );
}

export default Header;
