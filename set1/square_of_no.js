const square = function(number) {
  let square = number * number;
  return square;
}
console.log("square is "+square(process.argv[2]));
