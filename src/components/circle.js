// import using require

const { default: Shape } = require('./shape');

// declare class


// export class using module.exports

 var Circle = class Circle extends Shape {
    constructor(){
        this.calculateArea() = function(){
            console.log('calulate area');
        };
    }
}
module.exports.Circle = Circle ;