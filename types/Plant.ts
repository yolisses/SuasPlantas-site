export interface Plant {
  id: PlantId;
  name: string;
  description: string;
  card: string;
  swap: boolean;
  donate: boolean;
  price: string | null;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export type PlantId = number;
