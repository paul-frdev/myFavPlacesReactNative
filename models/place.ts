import { IPlace } from "types/place";

class Place {
  id?: number;
  title: string;
  imageUri: any;
  address?: string;
  location: { lat: number; lng: number };
  constructor({ id, title, imageUri, address, location }: IPlace) {
    this.id = id;
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
  }
}

export default Place;
