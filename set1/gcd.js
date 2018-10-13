const gcd = function(number1,number2) {
  let index="";
  for(let variable=1;variable<=number1;variable++){
    if(number1%variable==0 && number2%variable==0){
      index = variable;
    }
  }
  return index;
}
console.log("GCD of "+process.argv[2]+" and "+process.argv[3]+" is  "+gcd(process.argv[2],process.argv[3]));
