const Calculator = require('./CallculatorClass');
console.log('Calculator:', Calculator);

// const [operator, ...rest] = process.argv.slice(2);
// const numbers = rest.map(item => Number(item));

// const result = Calculator.calculate(operator, numbers);
const result = Calculator.init();
console.log('result:', result);
