import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { EmphasisButton } from "../forms/EmphasisButton";
import { HeaderLayout } from "../common/HeaderLayout";

const Map = () => {
  return (
    <div className="flex flex-1">
      <HeaderLayout>Sua localização</HeaderLayout>
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
      <div className="p-1">
        <EmphasisButton text="Salvar" />
      </div>
    </div>
  );
};

export default Map;
