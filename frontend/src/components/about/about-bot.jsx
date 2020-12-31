import React from 'react';
import Nav_bar from '../nav';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './about.css';
import { GiCircleClaws } from 'react-icons/gi';

const About_bot = () => {
    return (
        <div className="container">
            <Nav_bar />
            <div className="about-bot">
                <div className="about-bot-body">
                        <motion.h1 
                            initial={{ y: '-100vw' }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.5, duration: 1.9, type: "tweens" }}
                        >Wea<span>ther-Guid</span>er</motion.h1>
                        <div className="features">
                            <motion.h4 
                                initial={{ x: '100vw' }}
                                animate={{ x: 0 }}
                                transition={{ delay: 3}}
                                // whileTap={{ scale: 1.5, originX: 0, color: '#007bff' }} 
                            >
                                <GiCircleClaws /> Intelligent Chatbot 
                            </motion.h4>
                            <motion.h4 
                                initial={{ x: '100vw' }}
                                animate={{ x: 0 }}
                                transition={{ delay: 3.3 }}
                            >
                                <GiCircleClaws /> Replies automatically
                            </motion.h4>
                            <motion.h4 
                                initial={{ x: '100vw' }}
                                animate={{ x: 0 }}
                                transition={{ delay: 3.6 }}
                            >
                                <GiCircleClaws /> Suggest some location 
                            </motion.h4>
                            <motion.h4 
                                initial={{ x: '100vw' }}
                                animate={{ x: 0 }}
                                transition={{ delay: 3.9 }}
                                
                            >
                                <GiCircleClaws /> Accurate Preictions
                            </motion.h4>
                        </div>
                        <motion.div
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 4.5, duration: 2, type: 'spring', stiffness: 220 }}
                        >
                            <Link to="/about/finish"><button className="button-two">
                                <span>View More</span></button>
                            </Link>
                        </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About_bot;
