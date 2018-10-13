const sum = function(number) {
  let sum = 0;
  for(let variable = 1; variable <= number; variable++){
    sum = sum + variable;
  }
  return sum;
}

console.log("sum is "+sum(+process.argv[2]));

