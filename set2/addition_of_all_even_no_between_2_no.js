const additionOfEven = function(numberFrom,numberTill) {
  let sum = 0;
  for(let variable=numberFrom;variable<=numberTill;variable++){
    if(variable%2==0){
      sum = sum+variable;
    }
  }
  return sum;
}

console.log("Even sum is "+additionOfEven(+process.argv[2],process.argv[3]));
