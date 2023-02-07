const cars = ['Volvo','BMW','Toyota'];
cars [3]= 'Honda'
console.log(cars);
console.log(cars[2]);
console.log(cars.length);

const firstName = 'Sharon'
const sharon = [firstName, 'Tokiti', 2023-1999,'engineer'];
console.log(sharon);
console.log(sharon.length)

//add elements

cars.unshift('Vitz');
console.log(cars); //it will return the length of the new array length
 
//remove elements
cars.pop(); //removes the last element in the array
const popped = cars.pop();
console.log(cars);

cars.shift(); //removes the first element
console.log(cars); 

console.log(cars.includes('Volvo')); //returns true if the value indicated is present
console.log(cars.indexOf('Volvo')); //searches a string position

const calcTip = function (bill ){
    return bill >= 50 && bill <=300 ? bill * 0.15 : bill *0.2 ;
}
const bills = (125, 555 , 44);
const tip = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])];
console.log(bills , tip);
