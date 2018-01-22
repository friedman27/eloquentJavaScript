// can change both the length and width of chess board using the size variable
var size = 8;
var output = "";
for (var i = 0; i < size; i++) {
  if(i % 2 === 0 || i === 0) {
    output = " #"
  } else {
    output = "# ";
  }
  console.log(output.repeat(size/2));
}
