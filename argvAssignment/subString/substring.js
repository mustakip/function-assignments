const countSubstring = function(mainString,subString) {
  let mainLen = mainString.length;
  let subLen = subString.length;
  let occurenceCount = 0;
  let text = "";

  for(let attempt = 0; attempt < (mainLen-subLen+1); attempt++) {
    text = "";
    for(let position = attempt; position < (attempt+subLen); position++) {
      text = text+mainString[position];
    }
    if(text == subString) {
      occurenceCount++;
    }
  }
  return occurenceCount;
}

let mainString = process.argv[2];
let subString = process.argv[3];
console.log(countSubstring(mainString,subString));
