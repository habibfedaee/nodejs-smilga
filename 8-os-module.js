// --------------------------------------------------------------

// __filename:              file name
// require():               function to use modules (CommonJS)
// module:                  info about current module
// process:                 info about current env where the program is about to be executed

const os = require("os");

// information about the current user:
const user = os.userInfo();
//console.log(user);

// method that retrieve the system uptime in seconds
console.log(`System is up for ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
