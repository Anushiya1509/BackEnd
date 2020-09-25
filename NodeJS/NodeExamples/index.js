const { required } = require("joi");

var rectangle = require('./rectangle');

function solve(l,b) {

    console.log(`Length = ${l} Breadth = ${b}`);

    if(l<=0 || b<=0)
        console.log("Length and breadth should be greater than 0");
    else{
        console.log("Area of the rectangle is " + rectangle.area(l,b));
        console.log("Perimeter of the rectangle is "+ rectangle.perimeter(l,b));
    }
}

solve(-1,1);
solve(0,1);
solve(1,-1);
solve(1,0);
solve(14,15);