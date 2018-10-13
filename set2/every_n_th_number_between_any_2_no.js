const everyNth = function(numberFrom,numberTill,interval) {
  let number = 0;
  let series = "";
  while(numberFrom < numberTill) {
    number = numberFrom + interval;
    series = series+" "+ number;
    numberFrom += interval;
  }
  return series;
}

console.log(everyNth(+process.argv[2],+process.argv[3],+process.argv[4]));

