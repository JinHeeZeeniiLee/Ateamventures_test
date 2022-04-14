import React from 'react';
import '../styles/Nav.css';

interface NavProps {
    name: string;
    disabled: string;
}

const Nav = (name,disabled) => { 
<nav id="nav">
<div className="nav-title"></div>
    <div className="nav-title">
        <img src="../assets/logo.png"/>
    </div>
    <div className="nav-userbox">
        <img src="../assets/Vector.png"/>
        {name}
            |
        {disabled}
    </div>
</nav>}

)

export default Nav;