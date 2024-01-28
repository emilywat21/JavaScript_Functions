console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(let i =1; i <= count; i++){
        if(i% 2 != 0){
            console.log(i);
        }
    }
}
printOdds(100);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let aboveSixteen = `Contrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;
    if(age >= 16){
        console.log(aboveSixteen);
    }
    else {
        console.log(belowSixteen);
    }
}

//Exercise 3
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x,y){
    if(x > 0 && y > 0){
        console.log("Quadrant 1");
    }
    else if(x < 0 && y > 0){
        console.log("Quadrant 2");
    }
    else if(x < 0 && y < 0){
        console.log("Quadrant 3");
    }
    else if(x > 0 && y < 0){
        console.log("Quadrant 4");
    }
    else{
        console.log("Not in a quadrant.");
    }
}

//Exercise 4
console.log("EXERCISE 4:\n==========\n");
function whichTriangle(x,y,z){
    let triangle = "";
    if(x == y && x == z){
        triangle = "equilateral";
    }
    else if(x == y || x == y){
        triangle = "isosceles";
    }
    else{
        triangle = "scalene"
    }
    return console.log(`Sides [${x}, ${y}, ${z}] form a triangle of type: ${triangle}`);
}
whichTriangle(2, 2, 3);