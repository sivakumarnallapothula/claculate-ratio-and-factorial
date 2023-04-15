const a = require("../ratio/index");
const b = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = a(num1, num2);
  const factorial = b(num3);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
