/*
For this exercise, write two functions, reverseArray and
reverseArrayInPlace. The first, reverseArray, takes an array
as argument and produces a new array that has the same elements
in the inverse order. The second, reverseArrayInPlace, does what
the reverse method does: it modifies the array given as argument
in order to reverse its elements. Neither may use the standard
reverse method.
*/

// returns a new array with the values of the array parameter in reverse
function reverseArray(array) {
  var placeHolder = [];
  for (var i = 0; i < array.length; i++) {
    placeHolder.unshift(array[i]);
  }
  return placeHolder;
}

// modifies the array parameter by reversing it, returning the reversed array
function reverseArrayInPlace(array) {
  var lengthIndex = Math.floor(array.length / 2);
  var firstHalf;
  for (var i = 0; i < lengthIndex; i++) {
    firstHalf = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = firstHalf;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
