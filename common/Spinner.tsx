import SpinnerMaterial from 'react-spinner-material';
import { mainColor } from './mainColor';

interface SpinnerProps {
  color?: string;
  size?: number | string;
  stroke?: number | string;
}

export function Spinner({
  size = 40, stroke = 3.8, color = mainColor,
}:SpinnerProps) {
  return <SpinnerMaterial visible radius={size} stroke={stroke} color={color} />;
}
