const determineEven = function(number) { 
  let message = "is not an even number...";
  if(number%2==0){
    message = "is an even number...";
  }
  return message;
}
console.log(process.argv[2]+" "+determineEven(process.argv[2]));
