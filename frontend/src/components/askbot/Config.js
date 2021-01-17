import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import BotAvatar from './botAvatar';

const config = {
    lang: "no",
    botName: "Weather-guider",
    customStyles: {
      botMessageBox: {
        backgroundColor: "#0082c6",
      },
      chatButton: {
        backgroundColor: "#0082c6",
      },
    },
    initialMessages: [
      createChatBotMessage(
        `Hi! Do you want to travel somewhere? I will suggest whether to go there or not.`
      ),
    ],
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
        header: () => <div style={{ backgroundColor: '#0082c6', padding: "5px", borderRadius: "3px", height: "40px", fontWeight: "bold", fontSize:"20px", fontFamily:"cursive", color: "white"}}>Weather Guider</div>,
    },
  };

export default config;


// const config = {
//     botName: "Weather-Guider",
//     initialMessages: [createChatBotMessage('I am you weather guider how may i help you?')],
//     // customComponents: {
//     // // Replaces the default header
//     //    header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>Weather Guider</div>,
//     // // Replaces the default bot avatar
//     //    botAvatar: (props) => <FlightBotAvatar {...props} />,
//     // // Replaces the default bot chat message container
//     //    botChatMessage: (props) => <CustomChatMessage {...props} />,
//     // // Replaces the default user icon
//     //    userAvatar: (props) => <MyUserAvatar {...props} />,
//     // // Replaces the default user chat message
//     //    userChatMessage: (props) => <MyUserChatMessage {...props} />
//     // },
// };