// define a function that determines if the parameter is even or odd using recursion
function isEven(x) {
  if (x === 0) {
    return true;
  } else if (x === 1) {
    return false;
  } else if (x < 0) {
    return "??";
  } else {
    return isEven(x-2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
