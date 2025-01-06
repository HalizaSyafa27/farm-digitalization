export interface Farm {
    id: string;
    name: string;
    owner_id: string; // Foreign key to User
  }
  