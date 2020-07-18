// DIY vs. built-in map function
const times2 = (x) => x * 2;
const myArray = [1, 2, 3];

const myMap = (array, f) => {
  let newList = [];
  for(let i = 0; i < array.length; i++) {
    newList.push(f(array[i]));
  }
  return newList;
}

console.log(myMap(myArray, times2));
console.log([1, 2, 3].map(x => x*2));


// Prompt - multiply entire array by 2 then add 1
console.log([5, 2, 3, 6, 9].map(x => x * 2 + 1));


// Prompt - take array of strings with numbers in them
//          and turn them into integers
let stringArr = ['1', '7', '8', '12'];
console.log(stringArr.map(x => parseInt(x)));


// Prompt - take array of numbers and add then add them
console.log([1,2,3,4,5]
  .reduce((accumulator, item) => accumulator + item));


// Nick's Prompt
const getOperator = (name) => {
  switch(name) {
    case 'plus':
      return (x, y) => x + y;
    case 'times':
      return (x, y) => x * y;
    default:
      return 0;
  }
}

const op = getOperator('plus');
// const op = (x, y) => x + y;

const num = op(5, 6);
console.log(num);


// Prompt - determine paycheck amount of a worker with minimum wage pay
const getPaycheckAmount = (state) => {
  switch(state) {
    case 'alabama':
      return (hours, tips) => hours * 7.25 + tips;
    case 'alaska':
      return (hours, tips) => hours * 10.19 + tips;
    case 'arizona':
      return (hours, tips) => hours * 12.00 + tips;
  }
}

const middleFunction = getPaycheckAmount('alaska');
let finalNum = middleFunction(5, 25);

console.log(finalNum);


// Nick's Prompt
const times = (first) => (second) => first * second;

const timesTwo = times(2);   //  (second) => 2 * second
console.log(timesTwo(4));    // prints 8
console.log(timesTwo(8));    // prints 16
