const convert = function(tempInCentigrade) { 
  let tempInFahrenheit = ((tempInCentigrade*9)/5)+32;
  return tempInFahrenheit;
}
console.log("Temp in fahrenheit = "+convert(process.argv[2]));
