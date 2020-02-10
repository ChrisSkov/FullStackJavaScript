const os = require('os');

const osInfo = () => {
    const osObject = {
      platform: os.platform(),
      osType: os.type(),
      freeMemory: os.freemem(),
      totalMemory: os.totalmem(),
      EOL: os.EOL
    };
    return osObject;
  };
  
module.exports.osInfo = osInfo;

//does it print the correct value to the console?
var platform = os.platform();
var osType = os.type();
var freeMemory = os.freemem();
var totalMemory = os.totalmem();
var eol = os.EOL;

console.log(`Platform:  ${platform}`);
console.log(`osType:  ${osType}`);
console.log(`Free memory:  ${freeMemory}`);
console.log(`Total memory:  ${totalMemory}`);
console.log(`EOL:  ${eol}`);
//it did