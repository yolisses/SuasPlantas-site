import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { EmphasisButton } from "../forms/EmphasisButton";
import { HeaderLayout } from "../common/HeaderLayout";
import Image from "next/image";
import { SearchLocationInput } from "./SearchLocationInput";

function Map() {
  const centerSize = 40;
  return (
    <div className="flex flex-1">
      <HeaderLayout>Sua localização</HeaderLayout>
      <SearchLocationInput />
      <div className="flex flex-1 relative">
        <div className="flex-1 bg-green-300 flex relative z-0">
          <MapContainer
            center={[-6.88634, -38.5614]}
            zoom={13}
            className="flex-1"
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
        <div className="absolute z-20 w-full select-none flex justify-center items-center top-0 bottom-0 pointer-events-none">
          <Image src="/map_center.png" width={centerSize} height={centerSize} />
        </div>
      </div>
      <div className="p-1">
        <EmphasisButton text="Salvar" />
      </div>
    </div>
  );
}

export default Map;
