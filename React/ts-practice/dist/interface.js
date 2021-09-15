"use strict";
{
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        Circle.prototype.getArea = function () {
            return this.radius * this.radius * Math.PI;
        };
        return Circle;
    }());
    var Rectangle = /** @class */ (function () {
        function Rectangle(width, height) {
            this.width = width;
            this.height = height;
        }
        Rectangle.prototype.getArea = function () {
            return this.width * this.height;
        };
        return Rectangle;
    }());
    var shapes = [new Circle(5), new Rectangle(10, 5)];
    shapes.forEach(function (shape) {
        console.log(shape.getArea());
    });
    var person = {
        name: '추나윤',
        age: 28,
    };
    var expert = {
        name: '우종혁',
        skills: ['javascript', 'react', 'redux', 'NodeExpress', 'typescript'],
    };
    var people = [person, expert];
}
