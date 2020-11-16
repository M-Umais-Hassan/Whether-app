import React from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from './auth/AuthOptions';

export default function Nav_bar() {
    return (
        <nav className="nav">
            <h1 className="brand">
                <i className="fa fa-home"></i><Link to='/'>Weath<span>er-Gu</span>ider</Link>
            </h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link>Saved</Link></li>
                <AuthOptions />
            </ul>
        </nav>
    );
  
}


