import MessageManagers from "./MessageManagers.js";
import Pod from "./Pod.js";

export default class Question {
    label;

    constructor (label) {
        this.label = label;
    }

    ask(onAnswer) {
        setTimeout(() => {
            new MessageManagers().displayMessage(this.label);    
        }, 2000);    
        new Pod().changeState("talking");
    }
};

