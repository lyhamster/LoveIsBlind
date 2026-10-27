import { wait } from "../utils.js";

export default class MessageManagers {

    constructor() {
        if (!!MessageManagers.instance) {
            return MessageManagers.instance;
        }
        this.messageElement = document.createElement("div");
        this.main = document.querySelector("main");
        this.totalms;
        MessageManagers.instance = this;
        return this;
    }
    
    displayMessage(message) {
        this.messageElement.classList.add("dialogue");
        if (this.messageElement.hasChildNodes()) {
            const spanElement = this.messageElement.querySelectorAll("span");
            spanElement.forEach((letter) => {
                letter.remove();
            })
        }       
        const animDelayMs = this.sparseLetter(message);
        this.main.appendChild(this.messageElement);
        return wait(animDelayMs);
    }

    sparseLetter(question) {
        question.split("").forEach((letter, index) => {
            const spanElement = document.createElement("span"); 
            spanElement.classList.add("animalCrossingText");
            spanElement.style.setProperty("--acTextDuration", `${index * 200}ms`);
            spanElement.textContent = letter;
            this.messageElement.appendChild(spanElement);
        })
        return question.length * 200;
    }
};
