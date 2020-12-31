import React from 'react'
import Nav_bar from '../nav';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './about.css';
import { FaGithub, FaFacebook, FaInstagram, FaInternetExplorer } from 'react-icons/fa'

export default function Finish_about() {
    return (
        <div className="container">
            <Nav_bar />
            <div className="about-finish">
                <motion.div className="about-finish-body"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <p>Copyright © 2020-2021 : Whether-Guider | All rights Reserved.</p>
                </motion.div>
            </div>
            <motion.div className="share-links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <ul> 
                    <li>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span><FaFacebook /></span>
                        </a> 
                    </li>
                    <li>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span><FaGithub /></span>
                        </a> 
                    </li>
                    <li>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span><FaInstagram /></span>
                        </a> 
                    </li>
                    <li>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span><FaInternetExplorer /></span>
                        </a> 
                    </li>
                </ul>  
            </motion.div> 
        </div>
    )
}
