const countConsonant = function(string) {
  let consonantCount = 0;
  let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

  for(let position = 0; position < string.length; position++){
    for(let post = 0; post < consonants.length; post++) {
      if(string[position] == consonants[post]){
        consonantCount++;
      }
    }
  }
  return consonantCount;
}

inputString = process.argv[2];
console.log(countConsonant(inputString));
