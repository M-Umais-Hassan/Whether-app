import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    botName: "Weather-Guider",
    initialMessages: [createChatBotMessage('I am you weather guider how may i help you?')],
    customComponents: {
        // Replaces the default header
       // header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>Weather Guider</div>,
       // Replaces the default bot avatar
    //    botAvatar: (props) => <FlightBotAvatar {...props} />,
    //    // Replaces the default bot chat message container
    //    botChatMessage: (props) => <CustomChatMessage {...props} />,
    //    // Replaces the default user icon
    //    userAvatar: (props) => <MyUserAvatar {...props} />,
    //    // Replaces the default user chat message
    //    userChatMessage: (props) => <MyUserChatMessage {...props} />
    },
};

export default config;