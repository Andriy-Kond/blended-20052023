class CalculatorClass {
  constructor(operator, numbers) {
    (this.numbers = numbers), (this.operator = operator);
  }

  calculate = (op, numbs) => {
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
  init = () => this.calculate(this.operator, this.numbers);
}
const [operator, ...rest] = process.argv.slice(2);
const numbers = rest.map(item => Number(item));

module.exports = new CalculatorClass(operator, numbers);
// оператор new в першу чергу викликає конструктор, а вже потім створює новий екземпляр класу.
