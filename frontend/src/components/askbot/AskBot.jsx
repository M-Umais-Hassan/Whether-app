import React from 'react';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from "./ActionProvider";
import MessageParser from './MessageParser';
import config from './Config';
import { FaRobot } from 'react-icons/fa';

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
            <button class="chat-btn" onClick={()=>{this.setState({show:!this.state.show})}}><span id="bot-icon"><FaRobot /></span></button>
        </div>
      );
    }
  }
  
  export default AskBot;