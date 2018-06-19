
// templates of objects
class Reminder {
    constructor(inputText, inputDueDate){
        this.text = inputText;
        this.dueDate = inputDueDate;
    }

    toString(){
            return`-   ${this.text}    Due: ${this.dueDate}`;
    }
    
    toFileString(){
        return`${this.text}|${this.dueDate}`;
    }
}
 module.exports = Reminder;