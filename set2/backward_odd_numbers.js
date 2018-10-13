const backwardOdd = function(number) {
  let series = "";
  for(let variable = number; variable >=0; variable--){
    if(variable % 2 != 0){
      series = series+" "+variable;
    }
  }
  return series;
}

console.log(backwardOdd(process.argv[2]));
