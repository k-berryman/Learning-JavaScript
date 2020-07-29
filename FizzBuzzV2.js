let arr = [
  {
    divisor: 3,
    word: 'biz',
  }, 
  
  {
    divisor: 5,
    word: 'baz',
  },
  
  {
    divisor: 7,
    word: 'fab',
  }
];

let currentStr = '';
const isDivisible = (dividend, divisor) => dividend % divisor === 0;

arr.push(
  {
    divisor: 10,
    word: 'cad',
  }
);

for(let i = 0; i <= 110; i++) {
  currentStr = '';
  
  for(let j = 0; j < arr.length; j++) {
    if(isDivisible(i, arr[j].divisor)) {
      if(currentStr === '') {
        currentStr += arr[j].word;
      }
      
      else {
        currentStr += ' '+ arr[j].word;
      }
    }
  }
  
  if(currentStr !== '') {
    console.log(i);
    console.log(currentStr);
  }
}
