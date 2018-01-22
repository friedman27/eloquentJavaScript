/*
Write a function countBs that takes a string as its only argument
and returns a number that indicates how many uppercase “B” characters
are in the string.

Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that
is to be counted (rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function.
*/
var letter = "B";

function countBs(stringVar) {
  var counter = 0;
  for (var i = 0; i < stringVar.length; i++) {
    if (stringVar.charAt(i) === letter) {
      counter++;
    }
  }
  return counter;
}

function countChar(a, b) {
  letter = b;
  return countBs(a);
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
