"use strict";
function logger(a, b) {
    console.log(`Number Value 1: ${a}, String Value 2: ${b}`);
}
let a = 12;
let b = "Hello World";
logger(a, b);
let p3 = { firstName: "Tattie", lastName: "The Moist" };
function loggerV2(a, b) {
    console.log(`Person: ${JSON.stringify(a)}, Address: ${b.address}`);
}
const person = { name: "Satan" };
let address = { address: "Din Morsvej 666" };
loggerV2(person, address);
class Person {
    constructor(_name) {
        this._name = _name;
    }
    ;
    get name() { return this._name; }
    set name(val) { this._name = val; }
}
let p = new Person("Warløkke");
p.name = "Tattie";
loggerV2(p, address);
function loggerV3(a, b) {
    console.log(`Val1: ${JSON.stringify(a)}, Val2: ${JSON.stringify(b)}`);
}
loggerV3(a, b);
class GenericLogger {
    constructor() {
        this.log = (a, b) => console.log(`Val1: ${JSON.stringify(a)}, Val2: ${JSON.stringify(b)}`);
    }
}
const logger1 = new GenericLogger();
const logger2 = new GenericLogger();
logger1.log(a, b);
logger2.log(p, address);
//# sourceMappingURL=logger.js.map