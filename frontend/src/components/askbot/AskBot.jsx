import React from 'react';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from "./ActionProvider";
import MessageParser from './MessageParser';
import config from './Config';
import { FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

class AskBot extends React.Component{
    constructor(){
        super();
        this.state={
            show:false
        }
    }

    render(){
      return (
        <div>
            { 
            this.state.show ? 
                <div className="chat-popup">
                    <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
                </div> 
            : null 
            }
            <motion.button class="chat-btn" onClick={()=>{this.setState({show:!this.state.show})}}
                drag
                dragConstraints= {{ top: 0, right: 0, left: 0, bottom: 0 }}
                initial={{ bottom: -250 }}
                animate={{ bottom: 30 }}
                transition={{ delay: 3, duration: 2 }}
            ><span id="bot-icon"><FaRobot /></span></motion.button>
        </div>
      );
    }
  }
  
  export default AskBot;