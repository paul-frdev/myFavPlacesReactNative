export interface IPlace {
  id?: number;
  title: string;
  imageUri?: any;
  location: { lat: number; lng: number };
  address?: string;
}

export interface ILocation {
  lat: number;
  lng: number;
}
