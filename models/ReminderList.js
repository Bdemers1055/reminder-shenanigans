const fs = require('fs'); //this tells node that we need this module (set of functions and attributes)
const Reminder = require('./Reminder');

class ReminderList {
    constructor(filepath){
        this.filepath = filepath;
        const lines = fs.readFileSync(this.filepath, 'utf8').split('\n');
        const parsedLines = lines.map(line => line.split("|"));
        const humanFriendlyLines = parsedLines.map(parsedLine => {
            const reminder = new Reminder(parsedLine[0], parsedLine[1]);
            return reminder;
    });
    this.reminders = humanFriendlyLines;
}

add(reminder){
    this.reminders.push(reminder);
}

toFileOutput(){
    const fileString = this.reminders.map((reminder) => reminder.toFileString());
    const output = fileString.join('\n');
    return output;
}

toConsole(){
    const reminderStrings = this.reminders.map((reminder) => reminder.toString());
    const output = reminderStrings.join('\n');
    console.log(output);
}
}

module.exports = ReminderList;