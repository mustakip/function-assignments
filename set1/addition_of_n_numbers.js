const additionOfNumbers = function(numbers) {
  let addition = (numbers*(numbers+1))/2;
  return addition;
}

console.log(additionOfNumbers(+process.argv[2]));
