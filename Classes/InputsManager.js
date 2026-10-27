export default class InputsManager {
    constructor() {
        if (!!InputsManager.instance) {
            return InputsManager.instance;
        };
        this.main = document.querySelector("main");
        this.wrapper = document.querySelector(".multipleChoiceInputWrapper");
        InputsManager.instance = this;
        return this;
    }

    displayInput(instanceArray, parentElement) { 
        if (instanceArray.length > 1) {
            instanceArray.forEach((instance, index) => {
                const element = instance.createElement();
                element.style.setProperty("--delay", `${index * 300}ms`);
                this.wrapper.appendChild(element);
            });
            this.main.appendChild(this.wrapper);    
        } else {
           parentElement.appendChild(instanceArray[0].createElement());
        };
    }
};

