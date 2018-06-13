
const fs = require('fs'); //this tells node that we need this module (set of functions and attributes)

console.log("welcome to remind me"); // this tells node we need this module (se of functions and attributes)

const reminders = [
    "get some milk", //0
    "write a song", //1
    "join a team", //2 
    "read a book", //3
    "travel" //4
];

const reminderFile = "reminders.txt";

// for loop 
for(let i = 0; 1 < reminders.length; i += 1){
    const reminder = reminders[i];
    fs.appendFileSync(reminderFile, reminder + '\n');
}

console.log("Wrote all of the reminders to the file");
