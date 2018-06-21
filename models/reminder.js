
// templates of objects
const chalk = require('chalk');
const moment = require('moment');
const { dateFormat, padding } = require('../config'); 

class Reminder {
    constructor(inputText, inputDueDate){
        this.text = inputText;
        this.dueDate = moment(inputDueDate);
    }

    toString(){
            const dueLabel = chalk.bgRed.white("Due")
            return`-${chalk.green(this.text).padEnd(padding)}${dueLabel} ${chalk.red(this.dueDate.format(dateFormat))}`;
    }
    
    toFileString(){
        return`${this.text}|${this.dueDate.format(dateFormat)}`;
    }
}
 module.exports = Reminder;