var rectangle = require('./rectangle');

function solve(l,b) {

    console.log(`Length = ${l} Breadth = ${b}`);
    rectangle(l, b, (err, object) =>{
        if(err)
            console.log("Error: " + err.message);
        else{
            console.log("Area of the rectangle is " + object.area());
            console.log("Perimeter of the rectangle is "+ object.perimeter());
        }
    });
}

solve(-1,1);
solve(0,1);
solve(1,-1);
solve(1,0);
solve(14,15);