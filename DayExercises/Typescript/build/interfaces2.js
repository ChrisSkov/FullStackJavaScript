"use strict";
const bestActorOfAllTime = {
    firstName: "Nicolas Cage", lastWords: "My snakeskin jacket, baby", causeOfDeath: "Being too great at acting"
};
function myFunc(func) {
    console.log(func);
}
myFunc(bestActorOfAllTime);
function myOtherFunc(func) {
    for (let i in func) {
        // i.toUpperCase;
        console.log(i);
    }
}
myOtherFunc(bestActorOfAllTime);
//# sourceMappingURL=interfaces2.js.map