// function declaration
function helloWorld() {
  console.log('Hello, World!');
}

// function expressions
const calculateArea = function(width, height) {
  const area = width * height;
  return area;
};

// arrow function notation
const calculateVolume = (width, length, height) => {
  const volume = width * length * height;
  return volume;
};

// concise arrow notation
const printHello = () => console.log('Hello');

printHello();
