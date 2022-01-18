import SpinnerMaterial from 'react-spinner-material';
import { mainColor } from './mainColor';

interface SpinnerProps {
    radius?: number | string;
    color?: string;
    stroke?: number | string;
    [key: string]: any;
}

export function Spinner({
  radius = 40, stroke = 3.8, color = mainColor, ...rest
}:SpinnerProps) {
  return <SpinnerMaterial visible radius={radius} stroke={stroke} color={color} {...rest} />;
}
