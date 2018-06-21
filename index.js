#!/usr/bin/env node

// list command where all the reminders are printed
// add a command where we can add a reminder
const list = require('./commands/list');
const add = require('./commands/add');
const help = require('./commands/help');

const fs = require('fs')
const { reminderFile } = require('./config')

if(!fs.existsSync(reminderFile)){
    fs.openSync(reminderFile, 'a');
}

const args = process.argv.slice(2);
const subcommand = args[0];
if(subcommand === 'list'){
        list();
    } else if (subcommand === 'add'){
        const reminder = args[1];
        add(reminder);
    } else {
        help();
}

console.log("Completed your request.");
process.exit(0);
