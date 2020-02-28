"use strict";
//Interfaces 2
//a function that return the array(and prints it)
function printArray(firstName, lastName, alias) {
    let array = [firstName, lastName, alias];
    console.log(array);
    return array;
}
let satan = printArray;
satan("Nic", "Cage", "One True God");
//returns an array but in upper case
function printArrayUP(firstName, lastName, alias) {
    let array = [firstName.toUpperCase(), lastName.toUpperCase(), alias.toUpperCase()];
    console.log(array);
    return array;
}
let satan2 = printArrayUP;
satan2("Nic", "Cage", "One True God");
//i have verified that shit don't work, yo
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
};
//# sourceMappingURL=interfaces2.js.map