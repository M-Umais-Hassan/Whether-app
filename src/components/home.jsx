import React, { Component } from 'react';
import { row } from 'react-bootstrap';

export default function Home() {
    return (
        <div className="box">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div id="inner">
                        <h1>19 C , Sunny</h1><br/>
                        <h3>Raiwind</h3>
                        <h4>Lahore, Pakistan</h4>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
  
}


