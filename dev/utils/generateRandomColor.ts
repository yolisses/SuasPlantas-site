import { generateRandomInt } from './generateRandomInt';

export function generateRandomColor() {
  return `hsl(${generateRandomInt(0, 360)},${generateRandomInt(50, 100)}%,${generateRandomInt(50, 100)}%)`;
}
