/*
Write a range function that takes two arguments, start and end,
and returns an array containing all the numbers from start up to
(and including) end.

Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the previous program and see whether it
does indeed return 55.

As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used to build up the array.
If no step is given, the array elements go up by increments of one,
corresponding to the old behavior. The function call range(1, 10, 2) should
return [1, 3, 5, 7, 9]. Make sure it also works with negative step values
so that range(5, 2, -1) produces [5, 4, 3, 2].
*/


// takes two arguments and returns an array of all the numbers from start up to (and including) end
function range(start, end, step) {
  var array = [];


  //if the start value is less than the start value, array returns ascending
  if(start < end) {
    if ((step == null || 0) || step < 0) {
      step = 1;
    }
    while (start <= end) {
      array.push(start);
      start += step;
    }
  }
  // if end value is less than the start value, array returns descending
  else if (start > end) {
    if ((step == null || 0) || step > 0) {
      step = -1;
    }
    while (start >= end) {
      array.push(start);
      start += step;
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
console.log(range(1, 10, 2))
// → [1, 3, 5, 7, 9]
