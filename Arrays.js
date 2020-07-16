// array literal
let arr1 = [1, 2, 3];
let arr2 = ['hello', 4, false];

let names = ['Rick', 'Morty', 'Jerry'];
console.log(names[0]);   // prints 'Rick'

let objects = ['bird house', 'dog house', 'cat\'s mouse'];
let myObject = objects[2];
console.log(myObject);
// note - objects[3] is undefined

let greeting = 'hello world';
console.log(greeting[6]);   // prints 'w'

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';

// elements in a const array remain mutable

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// the following gives an ERROR
// utensils = ['Spoon'];
// console.log(utensils);

// .length returns number of items in array
// array.length

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

// .push() is a built-function of JavaScript
// .push() adds elements to the end of an array
// use dot notation
// can push one or more elements

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('walk puppy', 'pet puppy');
console.log(chores);

// .pop() removes last element of array
// doesn't take any arguments
// .pop() returns the value of the last element
// You can choose to store the removed value

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);


/* 
  .join();
  .slice();
  .splice();
  .shift();
  .unshift();
  .concat();
*/

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// removes element item from the array
groceryList.shift(groceryList);
console.log(groceryList);

// add 'popcorn' to the beginning of the array
groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1,4));
// .slice() is non-mutating
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// If you pass an array into a function
// and then mutate it
// the change still lasts outside that function

// pass-by-reference
// passing a reference to where the variable memory is stored and changing the memory

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

const removeElement = (newArr) => {
  newArr.pop();
};

removeElement(concept);
console.log(concept);

// in both changeArr and removeElement
// the change was maintained outside the function

// Nested Arrays
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]);    // Prints [2, 3]
console.log(nestedArr[1][0])  // Prints 2
// chain / add on more brackets

let numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];  // 6
