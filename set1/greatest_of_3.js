const greatest = function(number1,number2,number3) {
  let largestNo;
  largestNo = Math.max(number1,number2,number3);
  return largestNo;
}

let number1 = process.argv[2];
let number2 = process.argv[3];
let number3 = process.argv[4];

console.log(greatest(number1,number2,number3));
