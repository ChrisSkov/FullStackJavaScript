/*Assume the JavaScript-array did not offer the filter method. Then you could implement it by yourself. 
a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback as the second and returns a new (filtered) array according to the code provided in the callback (that is with the same behaviour as the original filter method).
Test the method with the same array and callback as in the example with the original filter method.*/

const myArray = [];
for (let i = 0; i < 100; i++)
{
    myArray.push(i);
}

const myFilter = (array, callback) =>
{
    let returnArray = [];
    array.forEach(element =>
    {
        returnArray.push(callback(element));

    });
    return returnArray;
};

console.log(
    "\n Best filter: " +
    myFilter(myArray, element =>
    {
        if (element > 90)
        {
            return element;
        }
    })
);

console.log(
    "\n Standard Filter: " +
    myArray.filter(element =>
    {
        if (element > 90)
        {
            return element;
        }
    })
);