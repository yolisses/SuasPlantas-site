export interface Feature {
  id: string;
  type: "Feature";
  place_type: ["country" | "place" | "region"];
  relevance: number;
  properties: { wikidata: string; short_code: string };
  text: string;
  place_name: string;
  matching_text: string;
  matching_place_name: string;
  bbox: number[];
  center: number[];
  geometry: {
    type: "Point";
    coordinates: number[];
  };
}
