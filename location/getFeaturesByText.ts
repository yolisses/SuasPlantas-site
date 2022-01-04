import axios from 'axios';
import { Feature } from './Feature';

export async function getFeaturesByText(text: string) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json`;
  const res = await axios.get(url, {
    params: {
      access_token: process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN,
    },
  });
  return res.data.features as Feature[];
}
