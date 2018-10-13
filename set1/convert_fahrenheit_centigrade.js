const convert = function(tempInFahrenheit) {
  let tempInCentigrade = ((tempInFahrenheit-32)*5)/9;
  return tempInCentigrade;
}
console.log("Temp in centigrade = "+convert(process.argv[2]));

