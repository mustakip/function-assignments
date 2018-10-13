const determineOdd = function(number) {
  message = " is not an odd number...";
  if(number%2!=0){
    message = " is an odd number...";
  }
  return message;
}
console.log(process.argv[2]+determineOdd(process.argv[2]));
