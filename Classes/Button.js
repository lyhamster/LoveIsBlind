export default class Button {
    #label;
    #callback;
    #hasColor;

    constructor(label, callback, hasColor) {
        this.#label = label;
        this.#callback = callback;
        this.#hasColor = hasColor;
    };

    createElement() {
        const bttn = document.createElement("button");
        bttn.classList.add(...["multipleChoiceInput","removeBttn"]);
        bttn.textContent = this.#label; 

        if (this.#hasColor) {
            bttn.classList.toggle("theme_alt");
        };
        
        bttn.addEventListener("click",(e) => {
            this.#callback(e); 
        });
        return bttn;
    }
};


