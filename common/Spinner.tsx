import SpinnerMaterial from 'react-spinner-material';
import { green600 } from './colors';

interface SpinnerProps {
  color?: string;
  size?: number | string;
  stroke?: number | string;
}

export function Spinner({
  size = 40, stroke = 3.8, color = green600,
}:SpinnerProps) {
  return (
    <SpinnerMaterial
      visible
      color={color}
      radius={size}
      stroke={stroke}
    />
  );
}
