import { wait } from "../utils.js";
import Answer from "./Answer.js";
import Button from "./Button.js";
import InputsManager from "./InputsManager.js";
import MessageManagers from "./MessageManagers.js";

export default class Candidate {
    indexNb = 0;
    interestLevel = 0;
    negativeCount = 0;
    positiveCount = 0; 
    favQuestion;
    favAnswer; 
    quitPodScore = -20;
    static totalQuestionLabel = "Nombres de questions répondues";
    static positiveAnswersLabel = "Nombre de réponses vraies";
    static negativeAnswersLabel = "Nombre de réponses fausses";

    constructor(name, age, questions) {
        this.name = name;
        this.age = age;
        this.questions = questions;
    }

    getNameElement() {
        return this.name;
    }

    async nextQuestion(onFinish) {    
        const main = document.querySelector("main");
        
        if (this.interestLevel === this.quitPodScore) {
                const nameElement = document.querySelector(".matchingModalTitle");
                await wait(2000);
                new MessageManagers().displayMessage(`${this.name} a quitté le pod`);  
                nameElement.remove();
                const dateAgainBttn = new Button("Date à nouveau", () => {
                    while (main.firstChild) {
                        main.removeChild(main.lastChild);
                    }
                    onFinish(); 
                })
                setTimeout(() => {
                    new InputsManager().displayInput([dateAgainBttn], main)
                }, 2000);
            return;
        }

        if (this.indexNb >= this.questions.length) {
            onFinish();
            return;
        };   
        this.questions[this.indexNb].ask((answerPoints) => {
            setTimeout(() => {
                if (answerPoints < 0) {
                    this.negativeCount++;
                } else {
                    this.positiveCount++;
                };

                if (answerPoints >= Answer.favourite) {
                    this.favQuestion = this.questions[this.indexNb].label;
                    this.questions[this.indexNb].answers.forEach((answer) => {
                        if (answer.label && answer.level >= Answer.favourite) {
                            this.favAnswer = answer.label;
                        };
                    });
                };
                
                this.interestLevel += (answerPoints);
                this.indexNb++;

                this.nextQuestion(onFinish); 
            }, 2000);
        });
    }

    dateSummary() {
        const summaryObj = {
            [Candidate.totalQuestionLabel] : this.questions.length,
            [Candidate.positiveAnswersLabel] : this.positiveCount,
            [Candidate.negativeAnswersLabel] : this.negativeCount,
            favQuestion : this.favQuestion,
            favAnswer : this.favAnswer,
            name: this.name,
            quitpod: this.quitPodScore,
            interestLevel: this.interestLevel,
        };
        return summaryObj;
    }
};