// Kaitlin Berryman
// Springboard

// what's inside finally will always run

try {
  undefined.pop(); // error
  console.log('INSIDE TRY BLOCK');
} catch(e) {
  // catch error
  console.log(`ERRORRR ${e}`);
} finally {
  console.log('INSIDE FINALLY BLOCK')
}

console.log('Will this print?');

// could use finally to close a file at the end

// finally still runs and prints even though error
try {
  undefined.pop();
} finally {
  console.log('FINALLLLLLYYYY');
}
