import React from 'react';
import Axios from 'axios';

var api_key = "b8bded5189dcb274c8d1256ef4e62932";

class ActionProvider {
    constructor(createChatBotMessage, setStateFun) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFun;
    }

    // greet = () => {
    //     const message = this.createChatBotMessage("Hello! How are you?");
    //     this.addMessageToState(message);
    // }

    // howareyou = () => {
    //     const message = this.createChatBotMessage("I am fine, Thankyou! How are you?");
    //     this.addMessageToState(message);
    // }

    // iamfine = () => {
    //     const message = this.createChatBotMessage("Good. So, how may i help you?");
    //     this.addMessageToState(message);
    // }

    prediction = (location) => {
        Axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${location}`)
        .then(res => {
            if (res.data.current.temperature <= 0 || res.data.current.weather_descriptions[0].toLowerCase() == 'rainy') {
                const message = this.createChatBotMessage("The temprature is too low at "+location+" and weather is also rainy. So, I will suggest you not to go.");
                this.addMessageToState(message);
            }
            if (res.data.current.temperature >= 0 && res.data.current.weather_descriptions[0].toLowerCase() != 'rainy') {
                const message = this.createChatBotMessage("You can travel " + location);
                this.addMessageToState(message);
            }
        })
        .catch(err => {
            const message = this.createChatBotMessage("Sorry the location you entered i didn't found 😢");
            this.addMessageToState(message);
        });
    }

    notRecoganized = () => {
        const message = this.createChatBotMessage("Sorry I didn't recoganized what you are trying to say :(");
        this.addMessageToState(message);
    }

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
}

export default ActionProvider;