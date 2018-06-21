const fs = require('fs');
const Reminder = require('../models/Reminder');
const ReminderList = require('../models/ReminderList');
const { reminderFile } = require('../config');
const chalk = require('chalk');

function add(addition){
    console.log(chalk.magenta.bold("Adding a new reminder ..."));
    const reminderList = new ReminderList(reminderFile);
    const reminder = new Reminder(addition, new Date());
    reminderList.add(reminder);
    const output = reminderList.toFileOutput();
    fs.unlinkSync(reminderFile);
    fs.appendFileSync(reminderFile, output);
}

module.exports = add;