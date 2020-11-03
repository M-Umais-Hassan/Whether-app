import React from 'react';

export default function Nav_bar() {
    return (
        <nav className="nav">
            <h1 className="brand">
                <a href="#">Weath<span>er-Gu</span>ider</a>
            </h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Saved</a></li>
                <li><a href="#">Ask</a></li>
            </ul>
        </nav>
    );
  
}


