const multiplication = function(number,count) {
  let answer = 0;
  let text = "";
  for(let variable = 1; variable <= count; variable++){
    answer = number * variable;
    text = text+"\n"+number+" * "+variable+" = "+answer; 
  }
  return text;
}

console.log(multiplication(process.argv[2],process.argv[3]));

