const interest = function(principal,rateOfIntrest,timePeriod) {
  let originalPrincipal = principal;
  let intrestToBeAdded = 0;
  let variable = 1;
  let intrest = 0;
  for(variable=1;variable<=timePeriod;variable++){
    intrestToBeAdded = (principal*rateOfIntrest)/100;
    principal = principal+intrestToBeAdded;
  }
  intrest = (principal) - (originalPrincipal);
  return intrest;
}
console.log("Intrest = "+interest(+process.argv[2],+process.argv[3],+process.argv[4]));

