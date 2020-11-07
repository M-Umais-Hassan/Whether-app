import React, { Component } from 'react';
import bg from '../assets/about-bg.jpg'; 
import Nav_bar from '../components/nav';
import { Row, Col } from 'react-bootstrap';

export default function About_page() {
    return (
        <div className="about">
            <Nav_bar />
            <Row>
            <Col md="1"></Col>
            <Col md="10">
                <div className="box">
                    <h1>About Me & Web App</h1><hr/>
                    <p>My name is Muhammad Umais Hassan. I am a student of BS computer Science at COMSATS university Islamabad Lahore campus.</p>
                    <p>This is my semester project which will help you to view your weather data. It detects your location automatically and displays weather information of your area. And if you will not allow your location it also has an option to view weather of any country or city.</p>
                </div>
            </Col>
            <Col md="1"></Col>
            </Row>
        </div>
    );
}

