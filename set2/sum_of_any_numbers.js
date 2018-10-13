const sum = function(numberFrom,numberTill) {
  let sum = 0;
  for(let variable=numberFrom;variable<=numberTill;variable++){
    sum = sum+variable;
  }
  return sum;
}

console.log("sum is "+sum(+process.argv[2],+process.argv[3]));

