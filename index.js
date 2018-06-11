console.log("welcome to remind me"); // this tells node we need this module (se of functions and attributes)

const fs = require('fs');
const reminders = "take a nap";
const reminderFile = "reminder.txt";

fs.writeFileSync(reminderFile, reminders);
console.log("Wrote all of the reminders to the file");
