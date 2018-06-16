
const fs = require('fs'); //this tells node that we need this module (set of functions and attributes)

const reminderFile = "reminders.txt";

const reminders = [
    "get some milk", //0
    "write a song", //1
    "join a team", //2 
    "read a book", //3
    "travel" //4
];

const dates = [
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
];

// list command where all the reminders are printed
// add a command where we can add a reminder
const args = process.argv.slice(2);
const subcommand = args[0];
if(subcommand === 'list'){
        list();
    } else if (subcommand === 'add'){
        add();
    } else {
        help();
}

console.log("Completed your request.");
process.exit(0);


// these are at the bottom purely for convention, functions hoist to the top 
function list(){
    console.log('Here are the things you need to do:');
    const lines = fs.readFileSync(reminderFile, 'utf8').split('\n');
    const parsedLines = lines.map(line => line.split("|");
    const humanFriendlyLines = parsedLines.map(parsedLine => {
        const reminder = parsedLine[0];
        const date = parsedLine[1];
        return `-      ${reminder}      Due: ${date}`;    
    });
    const output = humanFriendlyLines.join('\n');
    console.log(output);
        // reminders.forEach((reminder, index) => {
        //     const line = `-      ${reminder}    Due:${dates[index]}`;
        //     console.log(line);
        // });
}

function list(){
    console.log('Here are the things that you need to do...');
    const lines = fs.readFileSync(reminderFile, 'utf8').split('\n');
    const parsedLines = lines.map(line => line.split("|"));
    const humanFriendlyLines = parsedLines.map(parsedLine => {
        const reminder = parsedLine[0];
        const date = parsedLine[1];
        return `-     ${reminder}           Due: ${date}`;
    });
    const output = humanFriendlyLines.join('\n');
    console.log(output);
}


function add(){
    console.log("add");
    fs.unlinkSync(reminderFile);
    // for loop 
    for(let i = 0; i < reminders.length; i += 1){
        const reminder = reminders[i];
        const date = dates[i];
        const line = `${reminder}|${date}\n`;
        fs.appendFileSync(reminderFile, line);
    }
}

function help(){
    console.log('Something went wrong. Please check you syntax.');
}