"use strict";
class Shape {
    constructor(color) {
        this.toString = () => {
            return `Color: ${this._color} Area: ${this.area} Perimeter: ${this.perimeter}`;
        };
        this._color = color;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    //circle math
    get area() {
        return Math.pow(this._radius, 2) * Math.PI;
    }
    get perimeter() {
        return Math.PI * this._radius * 2;
    }
    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }
}
let circleTest = new Circle("Purpe", 9001);
console.log(circleTest.toString());
circleTest.radius = 8;
console.log(circleTest.toString());
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
}
//# sourceMappingURL=inherit.js.map