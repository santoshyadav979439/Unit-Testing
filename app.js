const factorial = (num) => {
  if (num === 1) return 1;
  else {
    return num * factorial(num - 1);
  }
};

const sum = (a, b, callback) => {
  return callback(a, b);
};
const fun1 = () => {};

module.exports = { factorial, sum };
