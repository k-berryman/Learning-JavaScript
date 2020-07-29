let divisorArr = [3, 5, 7];
let wordsArr   = ['biz', 'baz', 'fab'];
let currentStr = '';

const isDivisible = (dividend, divisor) => {
  if(dividend % divisor === 0) {
    return true;
  }
  
  else {
    return false;
  }
}

divisorArr.push(9);
wordsArr.push('cad');

divisorArr.push(10);
wordsArr.push('hat');

for(let i = 0; i <= 100; i++) {
  currentStr = '';
  
  for(let j = 0; j <= divisorArr.length; j++) {
    if(isDivisible(i, divisorArr[j])) {
      currentStr += wordsArr[j] + ' ';
    }
  }
  
  if(currentStr !== '') {
    console.log(currentStr);
  }
}
