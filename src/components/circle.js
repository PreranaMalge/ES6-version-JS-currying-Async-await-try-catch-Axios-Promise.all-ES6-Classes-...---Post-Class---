// import using require

// declare class

// export class using module.exports

 const Shape = require('./shape');
 class Circle extends Shape{
     constructor(color){
         super();
     }
     calculateArea() {};
 }
 module.exports = Circle;