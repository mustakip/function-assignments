const oddBetween = function(numberFrom,numberTill) {
  let series = "";
  for(let variable = numberFrom; variable <= numberTill; variable++){
    if(variable % 2 != 0){
      series = series+" "+variable;
    }
  }
  return series;
}

console.log(oddBetween(+process.argv[2],+process.argv[3]));
