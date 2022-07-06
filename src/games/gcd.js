import foundationGames from '../index.js';
import takeRandomNum from '../random.js';

const gistGames = 'Find the greatest common divisor of given numbers.';

const сonstructionNod = (operand1, operand2) => {
  let counter = operand1;
  while (operand1 % counter !== 0 || operand2 % counter !== 0) {
    counter -= 1;
  }
  return counter.toString();
};

function gcd() {
  const operand1 = takeRandomNum(1, 10);
  const operand2 = takeRandomNum(1, 10);

  const randomExpression = `${operand1} ${operand2}`;
  const correctAnswers = сonstructionNod(operand1, operand2);

  return [randomExpression, correctAnswers];
}

const beginningBrainGcd = () => {
  foundationGames(gistGames, gcd);
};

export { gcd };
export default beginningBrainGcd;