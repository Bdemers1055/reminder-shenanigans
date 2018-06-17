
const fs = require('fs'); //this tells node that we need this module (set of functions and attributes)

const reminderFile = "reminders.txt";

// list command where all the reminders are printed
// add a command where we can add a reminder
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

// these are at the bottom purely for convention, functions hoist to the top 
function list(){
    console.log('Here are the things you need to do:');
    const lines = fs.readFileSync(reminderFile, 'utf8').split('\n');
    const parsedLines = lines.map(line => line.split("|"));
    const humanFriendlyLines = parsedLines.map(parsedLine => {
        const reminder = parsedLine[0];
        const date = parsedLine[1];
        return `-      ${reminder}      Due: ${date}`;    
    });
    const output = humanFriendlyLines.join('\n');
    console.log(output);
}

console.log("Completed your request.");
process.exit(0);

function add(addition){
    console.log("Adding a new reminder ...");
    const lines = fs.readFileSync(reminderFile, 'utf8').split('\n');
    const parsedLines = lines.map(line => line.split("|"));
    const newLine = [[addition, new Date()]];
    const withAddition = parsedLines.concat(newLine);
    fs.unlinkSync(reminderFile);
    const outputLines = withAddition.map(line => {
        const reminder = line[0];
        const date = line[1];
        return `${reminder}|${date}`;
    });
    const output = outputLines.join(`\n`);
    fs.appendFileSync(reminderFile, output);
}

function help(){
    console.log('Something went wrong. Please check you syntax.');
}