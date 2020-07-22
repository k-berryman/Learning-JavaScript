// writing functions promotes abstraction
// higher-order functions accept functions as parameters, returns a function, or both
// treat functions like data
// In JavaScript, functions are first class objects, meaning functions can have properties and methods

// assign function to variable
const longggNameee = () => {
  console.log('Hello World');
};

// hello references longggNameee
// the memory address of hello and longggNameee are the same
let hello = longggNameee;

hello();  // prints 'Hello World'

console.log(hello.name);  // prints longggNameee

// functions as parameters
// a function that's passed in and used is called a callback functions
// when passing a function as a parameter, don't use parentheses because that would just return the result of that function

const timeFuncRuntime = (funcParameter) => {
  let time1 = Date.now();
  funcParameter();
  let time2 = Date.now();
  return time2 - time1;
};

const addTwoToTwo = () => 2 + 2;

// invoke timeFuncRuntime and pass in the function addTwoToTwo as the parameter
// addTwoToTwo isn't invoked when called so no (), but it's invoked inside timeFuncRuntime scope
timeFuncRuntime(addTwoToTwo);

// invoke timeFuncRuntime and pass in an anonymous function
timeFuncRuntime( () => {
  for(let i = 0; i < 10; i++) {
    console.log(i);
  }
} );

// Challenge given by Codecademy
const addTwo = num => num + 2;

const checkConsistentOutput = (inputFunc, inputVal) => {
  let ans1 = inputFunc(inputVal);
  let ans2 = inputFunc(inputVal);

  if(ans1 === ans2) {
    return ans1;
  }

  else {
    return 'This function returned inconsistent results';
  }
}

checkConsistentOutput(addTwo, 5);

// practice
const isThisFuncAHigherOrderFunc = (op) => {
   if(op === 'add') {
     return (val) => val + 1;
   }

   else if(op === 'sub') {
      return (val) => val - 1;
   }

   else {
      return 'invalid input';
   }
}

const value = isThisFuncAHigherOrderFunc('add');

if(value !== 'invalid input') {
   console.log(value(2));
}
