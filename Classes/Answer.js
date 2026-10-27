export default class Answer {
    static positive = "positive";
    static negative = "negative";
    static ick = "ick";
    static favourite = "favourite";

    constructor (label, level = "") {
        this.label = label;
        this.level = level;
    }  

    get currentLevel() {
        return ANSWER_POINTS[this.level];
    }
};

export let ANSWER_POINTS = {
    [Answer.positive]: 10,
    [Answer.negative]: -10,
    [Answer.ick]: -20,
    [Answer.favourite]: 15, 
}