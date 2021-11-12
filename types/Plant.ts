export interface Plant {
  id: PlantId;
  name: string;
  description: string;
  card: string;
  swap: boolean;
  donate: boolean;
  price: string | null;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export type PlantId = number;
