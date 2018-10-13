const product = function(number) {
  let product = 1;
  for(let variable=number;variable>0;variable--){
    product = product*variable;
  }
  return product;
}

console.log("product is "+product(process.argv[2]));
