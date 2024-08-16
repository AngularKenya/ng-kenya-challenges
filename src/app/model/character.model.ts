export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
  }
  
  export interface ApiResponse {
    results: Character[];
  
  }
  