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
    return 2037 - birthYear;
}
const age2 = calcAge2(1992);
console.log (age1, age2);

//arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1993);
console.log (age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 60 - age;
    //return retirement
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement (1999, 'Sharon'));
console.log(yearsUntilRetirement (2020, 'Milan'));

//Functions calling other functions
function cutFruits(fruit){
   return fruit * 4;
}

function smoothie (mangoes, bananas){
 const mangoPieces =   cutFruits (mangoes);
 const bananaPieces = cutFruits (bananas);
 const mangoSmoothie = `Blend ${mangoPieces} pieces of mangoes and ${bananaPieces} pieces of bananas.`;
    return mangoSmoothie;
}
console.log (smoothie (2, 3));