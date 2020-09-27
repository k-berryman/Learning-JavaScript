// Kaitlin Berryman
// Springboard
// let and const


// terribly organized notes
// exploring similarities and differences between
// var, let, and const


// replaces var
var artist = 'Van Gogh';
artist = 'Robin';
artist = 2;
var artist = true;
// no function — the scope is global
// aka it's added as a propety to the window object
// function scoped
// or they're scoped to the entire function .. they
// ignore loops and conditionals the scope is whole fn
var myChickens = 90;
console.log(window.myChickens); // 90
window.console.log('That sums up var');


// let
// let can be reassigned but not redeclared
let num = 2;
num = 4;
//let num = 6;   Syntax ERROR 
// unless scoping allows it
let num2 = 210;
{
  let num2 = 800;
}
// let is block-scoped
// creates variables that're scoped
// to the code block they're declared in


