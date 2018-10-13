const strip = function(inputString) {
  let stripedString = "";

  for(let position = 0; position < inputString.length; position++) {
    if(inputString[position] != " "){
      stripedString = stripedString + inputString[position];
    }
  }
  return stripedString;
}

let inputString = process.argv[2];
console.log(strip(inputString));

