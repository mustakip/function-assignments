const cube = function(number) {
  let cube = number*number*number;
  return cube;
}
console.log("cube is "+cube(+process.argv[2]));
