import Button from "./Button.js";
import InputsManager from "./InputsManager.js";
import ParametersModal from "./ParametersModal.js";
import Pod from "./Pod.js";
import Question from "./Question.js";

export default class ChoiceQuestion extends Question {
    answers;
    callback;
    hasMultiplesAnswers;
    onAnswer;
    scoreLevel = 0;
    bttnArr = [];

    constructor(label, answers, hasMultiplesAnswers) {
        super(label);
        this.answers = answers; 
        this.hasMultiplesAnswers = hasMultiplesAnswers;
    }

    ask(onAnswer) {   
        super.ask();
        setTimeout(() => {
            new Pod().changeState("presence");
            this.onAnswer = onAnswer;
            if (this.hasMultiplesAnswers) {
                this.handleMultipleAnswers();
            } else {
                this.handleAnswers(); 
            }; 
        }, 3000);
    }

    handleAnswers() {
        this.answers.forEach((answer) => {
            const bttn = new Button(answer.label, () => {
                if (answer.currentLevel >= 0) {
                    new Pod().changeState("thinkingRight");
                    this.#removeButton();
                } else {
                    new Pod().changeState("thinkingWrong");
                    this.#removeButton();
                }
                setTimeout(() => {
                    this.onAnswer(answer.currentLevel);
                }, 2000);
            }, new ParametersModal().getThemeAlt())
            this.bttnArr.push(bttn);
        });
        new InputsManager().displayInput(this.bttnArr);
    }

    handleMultipleAnswers() {
        this.answers.forEach((answer) => {
            const bttn = new Button(answer.label, (e) => {
                const target = e.target; 
                if (target.classList.contains("selectedAnswer")) {
                    target.classList.remove("selectedAnswer");
                    this.scoreLevel -= answer.currentLevel;
                } else {
                    target.classList.add("selectedAnswer");
                    this.scoreLevel += answer.currentLevel;
                };   
            }, new ParametersModal().getThemeAlt()); 
            this.bttnArr.push(bttn);
        });
        new InputsManager().displayInput(this.bttnArr);
        
        const validateBttn = new Button("Enter", () => {
            if (this.scoreLevel >= 0) {
                new Pod().changeState("thinkingRight");
            } else {
                new Pod().changeState("thinkingWrong");
            };
            this.#removeButton();
            setTimeout(() => {
                this.onAnswer(this.scoreLevel);
            }, 2000);
        },"theme_alt");
        const main = document.querySelector("main");
        new InputsManager().displayInput([validateBttn],main);
    }

    #removeButton() {
        const bttnElements = document.querySelectorAll(".removeBttn");
            bttnElements.forEach((bttn) => {
                bttn.remove();    
            });
        const dialogue = document.querySelector(".dialogue");
        dialogue.remove();
    }
};

   