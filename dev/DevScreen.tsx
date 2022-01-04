import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../location/Map'), { ssr: false });

export function DevScreen() {
  return (
    <>
      <div className="h-96 flex flex-col">
        <Map />
      </div>
      <div className="h-24 flex flex-col">
        <Map />
      </div>
    </>
  );
}
