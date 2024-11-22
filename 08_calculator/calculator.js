const add = function(a , b) {
	return a + b
};

const subtract = function(a , b) {
  return a - b
};

const sum = function(arr) {
	return arr.reduce((som , currentIterator) => {
    return som + currentIterator;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, currentIterator) => {
    return total * currentIterator;
  }, 1)
};

const power = function(a , b) {
	return a**b
};

const factorial = function(a) {
  let fac = 1
  for(let i = a ; i >= 1; i--)
  {
    fac = i * fac;
  }
  return fac
	
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
