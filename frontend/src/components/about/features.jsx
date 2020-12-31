import React from 'react'
import Nav_bar from '../nav';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './about.css';
import { GiCircleClaws } from 'react-icons/gi';

export default function Features() {
    return (
        <div className="container">
            <Nav_bar />
            <div className="about-features">
                <div className="about-features-body">
                    <motion.h1 
                        initial={{ y: '-100vw' }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.5, duration: 1.9, type: "tweens" }}
                    >Features Wea<span>ther-Guid</span>er</motion.h1>
                    <div className="features">
                        <motion.h4 
                            initial={{ x: '100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 3}}
                        >
                            <GiCircleClaws /> Live Weather info of your Location
                        </motion.h4>
                        <motion.h4 
                            initial={{ x: '100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 3.3 }}
                        >
                            <GiCircleClaws /> Search Any Location
                        </motion.h4>
                        <motion.h4 
                            initial={{ x: '100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 3.6 }}
                        >
                            <GiCircleClaws /> Save your Locations for future
                        </motion.h4>
                        <motion.h4 
                            initial={{ x: '100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 3.9 }}
                            
                        >
                            <GiCircleClaws /> View Saved Locations
                        </motion.h4>
                    </div>
                    <motion.div
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 4.5, duration: 2, type: 'spring', stiffness: 220 }}
                    >
                        <Link to="/about/bot"><button className="button-two">
                            <span>View More</span></button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
