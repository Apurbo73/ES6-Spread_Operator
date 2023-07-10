//Spread Operator:
var numbers = [1, 2, 3];
var newArray = [...numbers, 4, 5, 6];
numbers.push(10);
// console.log(newArray); //output is:[ 1, 2, 3, 4, 5, 6 ]
//

//***concat array using spread operator */
var a = [1, 2, 3];
var b = [4, 5, 6];
var result = [...a, ...b];
console.log(result); //output is:[ 1, 2, 3, 4, 5, 6 ]

//***concat object using spread operator */
var object1 = {
  a: 1,
  b: 2
};
var object2 = {
  c: 3,
  d: 4
};
var object3 = { ...object1, ...object2 };
console.log(object3); // output is : { a: 1, b: 2, c: 3, d: 4 }
