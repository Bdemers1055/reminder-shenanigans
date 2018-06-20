const fs = require('fs');
const Reminder = require('../models/Reminder');
const ReminderList = require('../models/ReminderList');
const { reminderFile } = require('../config');

function add(addition){
    console.log("Adding a new reminder ...");
    const reminderList = new ReminderList(reminderFile);
    const reminder = new Reminder(addition, new Date());
    reminderList.add(reminder);
    const output = reminderList.toFileOutput();
    fs.unlinkSync(reminderFile);
    fs.appendFileSync(reminderFile, output);
}

module.exports = add;