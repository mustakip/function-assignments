const factorial = function(number) {
  let factorial = 1;
  for(let variable=number;variable>0;variable--){
    factorial = factorial*variable;
  }
  return factorial;
}

console.log("factorial is "+factorial(process.argv[2]));
