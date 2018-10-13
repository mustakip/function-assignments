const average = function(number1,number2,number3) {
  let average = (number1+number2+number3)/3;
  return average;
}
console.log(average(+process.argv[2],+process.argv[3],+process.argv[4]));
