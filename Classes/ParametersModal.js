import { ANSWER_POINTS } from "./Answer.js";
import Button from "./Button.js";

export default class ParametersModal {
    bttnElement = document.querySelector(".multipleChoiceInput");
    answersElements =  document.querySelector(".multipleChoiceInputWrapper");
    themedBttn;

    constructor () {
        if (!!ParametersModal.instance) {
            return ParametersModal.instance;
        }

        this.headerElement = document.querySelector("header");
        this.main = document.querySelector("main");
        this.parametersElement = document.querySelector(".parameterBttn");
        this.element = document.createElement("div");

        ParametersModal.instance = this;
        return this;
    }

    createElement() {
        this.element.classList.add("modalParam");
        this.headerElement.appendChild(this.element);

        const modalParamWrapper = document.createElement("div");
        modalParamWrapper.classList.add("modalParamWrapper");

        const changeColorBttn = new Button(null, (e) => {
            const inputElement = document.querySelector("input");
            if (this.main.contains(this.bttnElement) || this.main.contains(this.answersElements)) {
                document.querySelectorAll(".multipleChoiceInput").forEach((bttn) => {
                    bttn.classList.toggle("theme_alt");
                })
            }
            if (this.main.contains(inputElement)) {
                inputElement.classList.toggle("theme_alt");
            }
            this.themedBttn = this.main.querySelector(".theme_alt");
        }, null);

        modalParamWrapper.appendChild(changeColorBttn.createElement());
        this.element.appendChild(modalParamWrapper);       

        const violetHeart = this.headerElement.querySelector("button");
        violetHeart.classList.remove("multipleChoiceInput", "removeBttn");
        violetHeart.classList.add("violetHeart");

        const parameterElement = document.createElement("a");
        parameterElement.textContent = "Paramètre"
        parameterElement.classList.add("paramSize");

        modalParamWrapper.appendChild(parameterElement);
        this.element.appendChild(this.parameterLevelElement())

        const test = document.querySelector(".paramSize");
        test.addEventListener("click", () => {
            const levelWrapper = document.querySelector(".levelWrapper");
    
            if (levelWrapper.style.display === "flex") {
                levelWrapper.setAttribute("style","display: none");
            } else {
                levelWrapper.setAttribute("style","display: flex");
            }
        })
    }

    getThemeAlt() {
        return this.themedBttn;
    }

    parameterLevelElement() {
        const levelWrapper = document.createElement("div");
        levelWrapper.classList.add("levelWrapper")

        const easyLevel = document.createElement("p");
        easyLevel.textContent = "facile";
        levelWrapper.appendChild(easyLevel);
        easyLevel.classList.add("easyLevel");

        easyLevel.addEventListener("click", () => {
            ANSWER_POINTS.positive = 15;
            ANSWER_POINTS.negative = -5;
            ANSWER_POINTS.ick = -10,
            ANSWER_POINTS.favourite = 20;
            return ANSWER_POINTS;
        })

        const  intermediateLevel = document.createElement("p");
        intermediateLevel.textContent = "intermediaire";
        levelWrapper.appendChild(intermediateLevel);
        intermediateLevel.addEventListener("click", () => {
            ANSWER_POINTS.positive = 10;
            ANSWER_POINTS.negative = -15;
            ANSWER_POINTS.ick = -25,
            ANSWER_POINTS.favourite = 10;
            return ANSWER_POINTS;
        })

        const hardLevel = document.createElement("p");
        hardLevel.textContent = "hard";
        levelWrapper.appendChild(hardLevel);
        hardLevel.addEventListener("click", () => {
            ANSWER_POINTS = {
                positive: 5, 
                negative: -25,
                ick: -35,
                favourite: 8,
            }
            return ANSWER_POINTS;
        })

        return levelWrapper;
    }
};

