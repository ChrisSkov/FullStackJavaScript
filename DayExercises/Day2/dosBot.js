const dos = require("./dosDetector");

console.log(dos)

const myDos = new dos.Dos_Detect(2000);

console.log(myDos);

myDos.addUrl(10);

setTimeout(() => {
    myDos.addUrl(10);
}, 2100);

myDos.on("DosDetect", event => {
    console.log("We're under fire!: ", event)
});