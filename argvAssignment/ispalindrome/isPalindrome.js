const checkPalindrome = function(string) {
  let count = 0;
  let message = "No";
  let limit = Math.floor(string.length/2);

  for(attempt = 0; attempt < limit ; attempt++){
    if(string[attempt] == string[(string.length-1)-attempt]) {
      count++;
    }
  }
  if(count == limit){
    message = "Yes";
  }
  return message;
}

let inputString = process.argv[2];
console.log(checkPalindrome(inputString));
