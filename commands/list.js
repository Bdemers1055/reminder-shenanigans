const ReminderList = require('../models/ReminderList');
const { reminderFile } = require('../config');
const chalk = require('chalk');

function list(){
    console.log(chalk.yellow.underline('Here are the things you need to do:'));
    const reminderList = new ReminderList(reminderFile);
    reminderList.toConsole();
}

module.exports = list;