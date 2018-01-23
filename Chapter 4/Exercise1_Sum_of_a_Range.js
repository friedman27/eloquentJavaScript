/*
Write a range function that takes two arguments, start and end,
and returns an array containing all the numbers from start up to
(and including) end.

Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the previous program and see whether it
does indeed return 55.

*/

// takes two arguments and returns an array of all the numbers from start up to (and including) end
function range(start, end) {
  var array = [];
  var difference = end - start;
  //if the start value is less than the start value, array returns ascending
  if(difference > 0) {
    for (var i = 0; i <= difference; i++) {
      array.push(start);
      start++;
    }
  }
  // if end value is less than the start value, array returns descending
  else if (difference < 0) {
    for (var k = 0; k <= (difference * -1); k++) {
      array.push(start);
      start--;
    }
  }
  // if start and end are the same number, return undefined
  else {
    return undefined;
  }
  return array;
}

// takes an array of numbers and returns the sum of these numbers
function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
