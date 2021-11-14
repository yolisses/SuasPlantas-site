import dynamic from "next/dynamic";

export function SelectLocationScreenImport() {
  const SelectLocationScreen = dynamic(
    () => import("./SelectLocationScreen"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  return <SelectLocationScreen />;
}
