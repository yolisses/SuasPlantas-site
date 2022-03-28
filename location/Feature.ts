/* eslint-disable camelcase */
export interface Feature {
  id: string;
  text: string;
  bbox: number[];
  type: 'Feature';
  relevance: number;
  place_name: string;
  matching_text: string;
  center: [number, number];
  matching_place_name: string;
  place_type: ['country' | 'place' | 'region'];
  geometry: { type: 'Point'; coordinates: number[]; };
  properties: { wikidata: string; short_code: string };
}
