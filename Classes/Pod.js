export default class Pod {
    podTransition = {
        joining: "2000ms ease-in-out toJoining",
        presence: "2000ms ease-in-out toPresence", 
        talking: "2000ms both ease-in-out toTalking",
        thinkingRight: "2000ms ease-in-out toThinking",
        thinkingWrong: "2000ms ease-in-out toThinking",
    }

    constructor() {   
        if (!!Pod.instance) {
            return Pod.instance;
        };

        this.main = document.querySelector("main");
        this.elementTitle =  document.createElement("p")
        this.state = [
            "off",
            "joining",
            "presence",
            "talking",
            "thinkingRight",
            "thinkingWrong",
            "matching",   
        ];
        this.currentState = "off";
        Pod.instance = this;   
        return this;
    }

    createElement() {
        const elementWrapper = document.createElement("div");
        elementWrapper.classList.add("podWrapper");

        const element = document.createElement("div");
        element.classList.add("pod", this.currentState);
        elementWrapper.appendChild(element);
        
        this.elementTitle.classList.add("matchingModalTitle");
        elementWrapper.appendChild(this.elementTitle);
        
        this.main.appendChild(elementWrapper);

        return elementWrapper;
    }

    setTitle(candidateName) {
        this.elementTitle.textContent = candidateName;
        return this.elementTitle;
    }

    changeState(value) {  
        const podElement = document.querySelectorAll(".pod");
        podElement.forEach((pod) => {
            pod.style.animation = this.podTransition[value];
        })
        setTimeout(() => {
            podElement.forEach((pod) => {
                pod.classList.remove(this.currentState);
                pod.style.animation = "";
                pod.classList.add(value);
            })
        this.currentState = value;
        }, 2000);
    }  
};

