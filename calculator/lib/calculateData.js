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

  return 'Unknown operation type';
};

module.exports = calculate;
