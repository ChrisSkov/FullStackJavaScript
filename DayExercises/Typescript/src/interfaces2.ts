//Interfaces 2

// task a) 
//an interface that describes a function
interface myFunc
{
    (firstName: string, lastName: string, alias: string): void;
}
//a function that return the array(and prints it)
function printArray(firstName: string, lastName: string, alias: string)
{
    let array: string[] = [firstName, lastName, alias];
    console.log(array);
    return array;
}

let satan: myFunc = printArray;
satan("Nic", "Cage", "One True God");

//returns an array but in upper case
function printArrayUP(firstName: string, lastName: string, alias: string)
{
    let array: string[] = [firstName.toUpperCase(), lastName.toUpperCase(), alias.toUpperCase()];
    console.log(array);
    return array;

}


let satan2: myFunc = printArrayUP;
satan2("Nic", "Cage", "One True God");

//i have verified that shit don't work, yo
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}