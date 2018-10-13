const simpleInterest = function(principal,rateOfIntrest,timePeriod) {
  let intrest = (principal * rateOfIntrest * timePeriod) / 100;
  return intrest;
}
console.log("Intrest = "+simpleInterest(process.argv[2],process.argv[3],process.argv[4]));

