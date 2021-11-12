export interface Plant {
  id: PlantId;
  name: string;
  description: string;
  card: string;
  swap: boolean;
  donate: boolean;
  price: number | null;
  tags: string[];
}

export type PlantId = number;
