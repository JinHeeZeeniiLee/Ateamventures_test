import React from 'react';
import '../styles/Nav.css';

interface NavProps {
    title: string;
    name: string;
    disabled: string;
}

const Nav: React.FC<NavProps>=({title,name,disabled}) => (
    <nav id="nav">
            <span className="nav-title">{title}</span>
            <span className="nav-username">{name}</span>
            <span className="nav-button">{disabled}</span>
    </nav>
)

export default Nav;