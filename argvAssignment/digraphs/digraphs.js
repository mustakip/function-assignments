const extractDigraphs = function(input) {
  let len = input.length;
  let extractedList = "";
  let delimiter = "";

  for(position = 0; position < len; position++) {
    if(input[position] == input[position+1]) {
      extractedList = extractedList+delimiter+input[position]+input[position+1];
      delimiter = "\n";
    }
  }
  return extractedList;
}

let inputString = process.argv[2];
console.log(extractDigraphs(inputString));

