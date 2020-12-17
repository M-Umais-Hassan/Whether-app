import React from 'react';

class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowercase = message.toLowerCase();
        this.actionProvider.prediction(lowercase);
        // var greetArray = ["slam", "assalam-o-alaikum", "hello", "hi", "hey", "Aoa"];
        // var howareyouArray = ["how are you", "are you fine", "are you ok", "What about you"]
        // if(greetArray.includes(lowercase)) {
        //     this.actionProvider.greet();
        // }
        // else if(howareyouArray.includes(lowercase)) {
        //     this.actionProvider.howareyou();
        // }
        // else if(lowercase.includes("fine")) {
        //     this.actionProvider.iamfine();
        // }
        // else {
        //     this.actionProvider.notRecoganized();
        // }
    }
}

export default MessageParser;