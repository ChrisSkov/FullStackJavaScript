"use strict";
/*
a) implement generic function that takes array of any kind
and return the array reversed

*/
const reversed = (array) => {
    return array.reverse();
};
console.log(reversed(["Nicolas", "Cage", "One", "True", "God"]));
console.log(reversed([9001, 666, 235]));
class DataHolder {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
}
//# sourceMappingURL=genericTest.js.map