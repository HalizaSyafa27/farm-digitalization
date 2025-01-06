export interface Breed {
    id: string;
    name: string;
    type_id?: string; // Foreign key to LivestockType
  }
  