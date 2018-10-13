const reverse = function(string) {
  let reversedString = "";

  for(let characterNo = 0; characterNo < string.length;characterNo++) {
    reversedString = string[characterNo] + reversedString;
  }
  return reversedString;
}

let inputString = process.argv[2];
console.log(reverse(inputString));
