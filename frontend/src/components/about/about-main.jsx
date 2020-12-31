import React, { Component } from 'react';
import bg from '../../assets/about-bg.jpeg'; 
import Nav_bar from '../nav';
import './about.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About_page() {
    return (
        <div className="container">
            <Nav_bar />
            <div className="about">
                <motion.div className="about-body"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                >
                    <h1 data-text="About Weather-Guider">About Weather-Guider</h1>
                    <Link to="/about/feature"><button className="button-two"><span>Know More</span></button></Link>
                </motion.div>
            </div>
        </div>
    );
}


// <div className="about">
//             <div className="container">
//                 <Nav_bar />
//                 <Row>
//                     <Col md="1"></Col>
//                     <Col md="10">
//                         <motion.div className="box"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                         >
//                             <h1>About Me & Web App</h1><hr/>
//                             <p>My name is Muhammad Umais Hassan. I am a student of BS computer Science at COMSATS university Islamabad Lahore campus.</p>
//                             <p>This is my semester project which will help you to view your weather data. It detects your location automatically and displays weather information of your area. And if you will not allow your location it also has an option to view weather of any country or city.</p>
//                         </motion.div>
//                     </Col>
//                     <Col md="1"></Col>
//                 </Row>
//             </div>
//         </div>