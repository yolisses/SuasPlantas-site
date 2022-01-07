import { generateRandomInt } from './generateRandomInt';

export function generateRandomColor() {
  const min = 128;
  const max = 255;
  return `rgb(${generateRandomInt(min, max)},${generateRandomInt(min, max)},${generateRandomInt(min, max)})`;
}
