const add = function(num1,num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(args) {
	 return args.reduce((sum,arg)=>(sum+arg),0);
}

const multiply = function(args) {
  return args.reduce((total,arg)=>{return total*arg},1)
};

const power = function(num1,num2) {
  if(num2===0) return 1
	return num1**num2
};

const factorial = function(n) {
  if(n===0) return 1;
	return n * factorial(n-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
