const os = require('os');

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