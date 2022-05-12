// declare class

// export class using module.exports

//Create a base class called "Shape" with methods drawShape, calculateArea and color property that is initialised with a color.

import React, { Component } from "react";
import { ModuleFilenameHelpers } from "webpack";

class Shape extends Component{
    constructor(){       
        this.color()="red";
    }
    drawShape() {};
    calculateArea() {};
}
module.exports = Shape;