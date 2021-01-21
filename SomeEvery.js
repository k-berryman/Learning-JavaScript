// Some Every Exercise
// Kaitlin Berryman
// Springboard

// Problem 1
function hasOddNumber(arr) {
    return arr.some(function(value, index, array) {
        if(value % 2 !== 0) { 
    	    return true; 
        }
   	return false;  
    })
}

console.log(hasOddNumber([1,2,2,2,2,2,4])) // true
console.log(hasOddNumber([2,2,2,2,2,4]))   // false



// Problem 2
function hasAZero(number) {
    number = number.toString()
    let numArr = number.split("")

    return numArr.some(function(value, index, array) {
  	if(value === '0') { 
    	    return true; 
        }
   	return false; 
    })
}

console.log(hasAZero(33321232131012)) // true
console.log(hasAZero(1212121))        // false



// Problem 3
function hasOnlyOddNumbers(arr) {
    return arr.every(function(value, index, array) {
  	if(value % 2 === 0) { 
    	    return false; 
        }
   	return true; 
   })
}

console.log(hasOnlyOddNumbers([1,3,5,7]))   // true
console.log(hasOnlyOddNumbers([1,2,3,5,7])) // false


// Problem 4
function hasNoDuplicates(arr) {
    return arr.every(function(value, index, array) {
        for(let i = index + 1; i < array.length; i++) {
    	    if(value == array[i]) { 
    		return false; 
   	    }
        }
   	return true; 
    })
}

console.log(hasNoDuplicates([1,2,3,1])) // false
console.log(hasNoDuplicates([1,2,3]))   // true





// Problem 5
function hasCertainKey(arr, key) {
    return arr.every(function(value, index, array) {
        if(!value[key]) {
    	    return false;
        }
        return true;
    })
}

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]

console.log(hasCertainKey(arr,'first'))      // true
console.log(hasCertainKey(arr,'isCatOwner')) // false




// Problem 6
function hasCertainValue(arr, key, val) {
    return arr.every(function(value, index) {
        if(value[key] === val) {
       	    return true;
        }
        return false;
    })
}

let arr2 = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

console.log(hasCertainValue(arr2,'title','Instructor')) // true
console.log(hasCertainValue(arr2,'first','Elie'))       // false
