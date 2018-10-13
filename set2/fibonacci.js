const fibonacci = function(number) {
  let firstElement = 0;
  let secondElement = 1;
  let fibonacci = "";
  let sum = 0;
  for(let variable = 1; variable <= number; variable++){
    sum = firstElement + secondElement;
    fibonacci = fibonacci+" "+firstElement;
    firstElement = secondElement;
    secondElement = sum;
  }
  return fibonacci;
}

console.log(fibonacci(process.argv[2]));
