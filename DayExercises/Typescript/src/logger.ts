function logger(a: number, b: string)
{
    console.log(`Number Value 1: ${ a }, String Value 2: ${ b }`);
}

let a = 12;
let b = "Hello World";
logger(a, b);


interface IPerson
{
    name: string
}
//optional fields are marked with: "?"
interface IPersonV2 { firstName: string, lastName: string, phone?: string }

let p3: IPersonV2 = { firstName: "Tattie", lastName: "The Moist" }
interface IAddress { address: string }
function loggerV2(a: IPerson, b: IAddress)
{
    console.log(`Person: ${ JSON.stringify(a) }, Address: ${ b.address }`);
}
const person: IPerson = { name: "Satan" };
let address = { address: "Din Morsvej 666" };
loggerV2(person, address);

class Person implements IPerson
{
    constructor(private _name: string) { };
    get name() { return this._name }
    set name(val: string) { this._name = val }
}

let p = new Person("Warløkke");
p.name = "Tattie"
loggerV2(p, address)

function loggerV3<T, U>(a: T, b: U)
{
    console.log(`Val1: ${ JSON.stringify(a) }, Val2: ${ JSON.stringify(b) }`);
}

loggerV3(a, b);

class GenericLogger<T, U>
{
    log = (a: T, b: U) => console.log(`Val1: ${ JSON.stringify(a) }, Val2: ${ JSON.stringify(b) }`);

}

const logger1 = new GenericLogger<number, string>();
const logger2 = new GenericLogger<IPerson, IAddress>();

logger1.log(a, b);
logger2.log(p, address);