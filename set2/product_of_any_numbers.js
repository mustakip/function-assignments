const productFrom = function(numberFrom,numberTill) {
  let product = 1;
  for(let variable=numberFrom;variable<=numberTill;variable++){
    product = product*variable;
  }
  return product;
}

console.log("product is "+productFrom(+process.argv[2],+process.argv[3]));
