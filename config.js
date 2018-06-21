const path = require('path');
const os = require('os');
module.exports.reminderFile = path.join(os.homedir(), '.reminders');
module.exports.dateFormat = 'M/D/YYYY hh:mm a';
module.exports.padding = 60;