import dynamic from 'next/dynamic';

export function SelectLocationPageImport() {
  const SelectLocationPage = dynamic(
    () => import('./SelectLocationPage'), // replace '@components/map' with your component's location
    { ssr: false }, // This line is important. It's what prevents server-side render
  );
  return <SelectLocationPage />;
}
