import foundationGames from '../index.js';
import takeRandomNum from '../random.js';

const gistGames = 'What number is missing in the progression?';

const getProgression = (startElement, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startElement + step * i);
  }
  return progression;
};

export function brainProgression() {
  const startElement = takeRandomNum(1, 20);
  const step = takeRandomNum(1, 20);
  const progressionLength = takeRandomNum(5, 10);
  const index = takeRandomNum(0, progressionLength - 1);

  const progression = getProgression(startElement, step, progressionLength);

  const correctAnswer = (progression[index]).toString();
  progression[index] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
}

const beginningBrainProgression = () => foundationGames(gistGames, brainProgression);

export default beginningBrainProgression;
