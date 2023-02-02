export interface IPlace {
  id?: string;
  title: string;
  imageUrl: any;
  location: { lat: number; lng: number };
  address: string;
}
