const lcm = function(number1,number2) {
  let gcd = 1;
  let lcm = 0;
  for(let variable = 1; variable <= number1; variable++) {
    if(number1 % variable == 0 && number2 % variable == 0) {
      gcd = variable;
    }
  }
  lcm = (number1*number2)/gcd;
  return lcm;
}
console.log(lcm(process.argv[2],process.argv[3]));
