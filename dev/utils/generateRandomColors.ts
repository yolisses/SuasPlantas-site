import { generateRandomColor } from './generateRandomColor';

export function generateRandomColors(length : number) {
  const result = [];
  for (let i = 0; i < length; i++) {
    result[i] = generateRandomColor();
  }
  return result;
}
