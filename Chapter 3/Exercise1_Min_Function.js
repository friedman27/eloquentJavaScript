// Create a min function

function min(a, b) {
  if (a < b) {
  return a;
  } else if (b < a) {
  return b;
  } else {
  console.log("Values are equal.")
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
