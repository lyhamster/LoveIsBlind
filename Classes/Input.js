export default class Input {
    #onEnter;
    #hasTheme;
    constructor(onEnter, hasTheme) {
        this.#onEnter = onEnter;
        this.#hasTheme = hasTheme;
    }

    createElement() {
        const input = document.createElement("input");
        if (this.#hasTheme) {
            input.classList.toggle("theme_alt");
        }

        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") { 
                this.#onEnter(e);
            };
        });
        return input;
    }
};



