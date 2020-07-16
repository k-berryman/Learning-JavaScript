// Challenge given by Codecademy

// for loop
// iterator variable
// first part - initialization
// second part - stopping condition
// third part - iteration

for(let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}


const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// The index of the last element of an array
// is equivalent to the length of the array minus 1
// therefore, there is no element at index of arr.length

for(let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}


// Nested loops
// use case - compare elements in two arrays
// for each round of the outer for loop, inner will run comletely

let bobsFollowers   = ['bart', 'marge', 'lisa', 'maggie'];
let tinasFollowers  = ['bart', 'marge', 'nick'];
let mutualFollowers = [ ];

for(let i = 0; i < bobsFollowers.length; i++) {
  for(let j = 0; j < tinasFollowers.length; j++) {
    if(bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}



// while loop
// use case - when we don't know how many times a loop should run

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while(currentCard !== 'spade') {
  // Random number from 0 to 3
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}



// do...while statements
// use case - want code to run at least once and then loop based on specific condition
// does the task once and then checks condition

let cupsOfSugarNeeded = 10;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded)



// the break keyword
// stop a loop from running even though the stopping condition hasn't been met
// break from loop's block
// use case - add test conditions to exit loop

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);

  if(rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
}

// since there's a ' ... either use \ or " "
console.log('And if you don\'t know, now you know.');
