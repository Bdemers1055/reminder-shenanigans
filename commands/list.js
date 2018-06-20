const ReminderList = require('../models/ReminderList');
const { reminderFile } = require('../config');

function list(){
    console.log('Here are the things you need to do:');
    const reminderList = new ReminderList(reminderFile);
    reminderList.toConsole();
}

module.exports = list;