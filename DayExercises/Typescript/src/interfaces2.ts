

interface IFunc 
{
    [index: number]: Array<string>;
}
const bestActorOfAllTime =
{
   
    firstName: "Nicolas Cage", lastWords: "My snakeskin jacket, baby", causeOfDeath: "Being too great at acting"
};

function myFunc(func: IFunc)
{

    console.log(func);
}

myFunc(bestActorOfAllTime);

function myOtherFunc(func: IFunc)
{

    for (let i in func)
    {
        // i.toUpperCase;

        console.log(i);
    }
}

myOtherFunc(bestActorOfAllTime);