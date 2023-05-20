// Калькулятор має мати 4 дії: + * - /

// node calc.js sum  10 32 40
// node calc.js div  60 2 40
// node calc.js mult 2 3 5
// node calc.js subs 50 5 2
// console.log(process.argv);

const [operator, ...rest] = process.argv.slice(2); // видаляємо 2 перших елементи масиву
// console.log('rest:', rest);
// console.log('operator:', operator);
// console.log('data:', data);
const numbers = rest.map(item => Number(item));

// console.log('numbers:', numbers);

const calculate = (op, numbs) => {
  if (op === 'sum') {
    return numbs.reduce(
      (previousValue, currentValue, currentIndex, array) =>
        previousValue + currentValue,
      0 // можна не писати, бо бере нульовий індекс масиву
    );
  }

  if (op === 'div') {
    return numbs.reduce(
      (previousValue, currentValue, currentIndex, array) =>
        previousValue - currentValue
    );
  }

  if (op === 'mult') {
    return numbs.reduce(
      (previousValue, currentValue, currentIndex, array) =>
        previousValue * currentValue
    );
  }

  if (op === 'subs') {
    return numbs.reduce(
      (previousValue, currentValue, currentIndex, array) =>
        previousValue / currentValue
    );
  }

  return 'Unknown opetation type';
};

const result = calculate(operator, numbers);
console.log(result);
