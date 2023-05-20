const [operator, ...rest] = process.argv.slice(2);
const numbers = rest.map(item => Number(item));

const calculate = (op, numbs) => {
  if (op === 'sum') {
    return numbs.reduce(
      (previousValue, currentValue, currentIndex, array) =>
        previousValue + currentValue
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
