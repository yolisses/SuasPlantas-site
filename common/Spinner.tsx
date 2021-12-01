import { SpinnerCircular } from "spinners-react";

export function Spinner() {
  return (
    <SpinnerCircular
      size={20}
      thickness={180}
      speed={180}
      color="rgba(0, 255, 0)"
      secondaryColor="rgba(255, 255, 255, 0.1)"
    />
  );
}
