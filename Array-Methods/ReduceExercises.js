// Springboard Challenge - Kaitlin Berryman
// inputs object array and a key
// outputs new array w/ value of each object at the key

function extractValue(objArr, key) {
  objArr.reduce(function(accum, nextValue) {
    return this.key;
  });
}

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
console.log(extractValue(arr,'name')) // ['Elie', 'Tim', 'Matt', 'Colt']



// Springboard Challenge - Kaitlin Berryman
// input string
// output object w/ keys as values and w/ values as number of times vowel is included
// case insensitive

function vowelCount(str) {
  str.reduce(function(accum, nextValue) {
    console.log(accum);
  });
}

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
