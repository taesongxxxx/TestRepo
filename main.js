const calculator = (cmd, a, b) => {
  if (cmd === 'add') {
    return sum(a, b);
  } else if (cmd === 'subtract') {
    return subtract(a, b);
  } else if (cmd === 'multiply') {
    return multiply(a, b);
  } else if (cmd === 'divide') {
    return divide(a, b);
  }
}

const sum = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  if (b === 0) {
    return 'Error: Division by zero';
  } else {
    return a / b;
  }
}

console.log(calculator('add', 5, 3));
console.log(calculator('subtract', 5, 3));
console.log(calculator('multiply', 5, 3));
console.log(calculator('divide', 5, 3));
