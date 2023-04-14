const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
  let total = 0;
	for (let i = 0; i < num.length; i++){
    total += num[i]; 
  }
  return total;
};

const multiply = function(num) {
  let total = num[0];
	for (let i = 1; i < num.length; i++){
    total *= num[i]; 
  }
  return total;
};

const power = function(num1, num2) {
  let total = num1;
  for (let i = 1; i < num2; i++) {
    total *= num1;
  }
  return total;
};

const factorial = function(num) {
	let total = 1; 
  if (num == 0) {
    total = 1;
  } else {
    for (let i = num; i > 0; i--) {
      total *= i;
    }
  }
  return total;
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
