abstract class Shape
{
    private _color: string;
    constructor(color: string)
    {
        this._color = color;
    }
    abstract get area(): number;
    abstract get perimeter(): number;
    get color()
    {
        return this._color;
    }
    set color(color: string)
    {
        this._color = color;
    }
    toString = () =>
    {
        return `Color: ${this._color} Area: ${this.area} Perimeter: ${this.perimeter}`;
    };
}

class Circle extends Shape
{
    private _radius: number;
    constructor(color: string, radius: number)
    {
        super(color);
        this._radius = radius;
    }
    //circle math
    get area()
    {
        return Math.pow(this._radius, 2) * Math.PI;
    }
    get perimeter()
    {
        return Math.PI * this._radius * 2;
    }
    get radius()
    {
        return this._radius;
    }
    set radius(radius: number)
    {
        this._radius = radius;
    }

}

let circleTest = new Circle("Purpe", 9001);
console.log(circleTest.toString());
circleTest.radius = 8;
console.log(circleTest.toString());

class Cylinder extends Circle
{
    private _height: number;
    constructor(color: string, radius: number, height: number)
    {
        super(color, radius);
        this._height = height;
    }
}