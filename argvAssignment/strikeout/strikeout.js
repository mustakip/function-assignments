const strikeout = function(inputText,letter) {
  let length = inputText.length;
  let finalText = "";

  for(let position = 0; position < length; position++) {
    let character = inputText[position];
    if(inputText[position] == letter){
      character = "-";
    }
    finalText = finalText+character;
  }
  return finalText;
}

let inputString = process.argv[2];
let letterToStrike = process.argv[3];
console.log(strikeout(inputString,letterToStrike));
