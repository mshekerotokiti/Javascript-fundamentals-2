function logger () {
    console.log (`My name is Sharon`);
}
//calling, running, invoking a function
logger();
logger(); // this will invoke the function the second time

function fruitProcessor (apples, oranges){
    console.log (apples ,oranges);
    const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor (5,2);
console.log (appleJuice);

const appleOrange = fruitProcessor (6,3);
console.log (appleOrange);

//function declaration
 function calcAge1 (birthYear){
    return 2037 - birthYear;
 }
const age1 = calcAge1(1991);
console.log (age1);

//function expression
const calcAge2 = function (birthYear){
    return 2040 - birthYear;
}
const age2 = calcAge2(1992);
console.log (age1, age2);
