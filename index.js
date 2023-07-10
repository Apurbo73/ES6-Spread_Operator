//Spread Operator:
var numbers = [1, 2, 3];
var newArray = [...numbers, 4, 5, 6];
numbers.push(10);
// console.log(newArray); //output is:[ 1, 2, 3, 4, 5, 6 ]
//

//***concat using spread operator */
var a = [1, 2, 3];
var b = [4, 5, 6];
var result = [...a, ...b];
console.log(result);
//output is:[ 1, 2, 3, 4, 5, 6 ]