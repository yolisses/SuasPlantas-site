import "leaflet/dist/leaflet.css";
import { EmphasisButton } from "../forms/EmphasisButton";
import { HeaderLayout } from "../common/HeaderLayout";
import Image from "next/image";
import { useState } from "react";
import { Feature } from "./Feature";
import axios from "axios";
import { AutoCompleteInput } from "./AutoCompleteInput";
import Map from "./Map";

function SelectLocationScreen() {
  const centerSize = 40;
  const [center, setCenter] = useState([-69.761008, -26.783346]);
  console.error({ center });

  function handleChange(value: Feature) {
    console.log("handle select", value);
    setCenter(value.center.reverse());
    console.error(value);
  }

  async function getFeaturesByText(text: string) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json`;
    const res = await axios.get(url, {
      params: { access_token: process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN },
    });
    return res.data.features as Feature[];
  }

  function getText(value: Feature) {
    return value.place_name.replace("Brazil", "Brasil");
  }

  function keyExtractor(value: Feature) {
    return value.id;
  }

  return (
    <div className="flex flex-1">
      <HeaderLayout>Sua localização</HeaderLayout>
      <AutoCompleteInput
        ketExtractor={keyExtractor}
        getText={getText}
        getOptions={getFeaturesByText}
        onChange={handleChange}
      />
      <div className="flex flex-1 relative">
        <div className="flex-1 bg-green-300 flex relative z-0">
          <Map center={center} />
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

export default SelectLocationScreen;
