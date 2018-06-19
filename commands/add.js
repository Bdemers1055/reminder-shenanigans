const fs = require('fs');
const Reminder = require('../models/Reminder');
const ReminderList = require('../models/ReminderList');
const config = require('../config');
const reminderFile = config.reminderFile;

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