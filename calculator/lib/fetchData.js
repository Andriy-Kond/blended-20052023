const [operator, ...rest] = process.argv.slice(2);
const numbers = rest.map(item => Number(item));

module.exports = {
  operator,
  numbers,
};
