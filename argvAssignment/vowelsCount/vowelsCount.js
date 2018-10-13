const countVowels = function(inputText) {
  let vowelCount = 0;
  let vowels = "aeiouAEIOU";

  for(let position = 0 ; position < inputText.length ; position++) {
    for(let vowelposition = 0; vowelposition < vowels.length; vowelposition++) {
      if(inputText[position] == vowels[vowelposition]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}

let inputString = process.argv[2];
console.log(countVowels(inputString));

