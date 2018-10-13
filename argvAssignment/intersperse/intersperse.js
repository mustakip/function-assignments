const intersperse = function(inputString) {
  let delimiter = "";
  let interspersedString = "";

  for(let position = 0; position < inputString.length; position++) {
    interspersedString = interspersedString+delimiter+inputString[position];
    delimiter = ",";
  }
  return interspersedString;
}

let inputString = process.argv[2];
console.log(intersperse(inputString));
