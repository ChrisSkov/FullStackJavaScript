/*
a) implement generic function that takes array of any kind
and return the array reversed

*/
const reversed = <T>(array: T[]) =>
{
    return array.reverse();
};

console.log(reversed<string>(["Nicolas", "Cage", "One", "True", "God"]));
console.log(reversed<number>([9001, 666, 235]));

class DataHolder<T>
{
    //private is noted by the private keyword and the _ infront of variable names
    private _value: T;
    constructor(value: T)
    {
        this._value = value;
    }

    get value()
    {
        return this._value;
    }
    set value(value: T)
    {
        this._value = value;
    }

    
}