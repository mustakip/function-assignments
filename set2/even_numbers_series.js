const evenSeries = function(number) {
  let series = "";
  for(let variable = 1; variable <= number; variable++){
    if(variable % 2 == 0){
      series = series+" "+variable;
    }
  }
  return series;
}

console.log(evenSeries(process.argv[2]));
