import SpinnerMaterial from 'react-spinner-material';

interface SpinnerProps {
    radius?: number | string;
    color?: string;
    stroke?: number | string;
    [key: string]: any;
}

export function Spinner({
  radius = 20, stroke = 4, color = '#16A34A', ...rest
}:SpinnerProps) {
  return <SpinnerMaterial visible radius={radius} stroke={stroke} color={color} {...rest} />;
}
