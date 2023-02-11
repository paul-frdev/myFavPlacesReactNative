import { IPlace } from "types/place";

class Place {
  id: string;
  title: string;
  imageUri: any;
  address?: string;
  location: { lat: number; lng: number };
  constructor({ id, title, imageUri, address, location }: IPlace) {
    this.id = new Date().toString() + Math.random().toString();
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
  }
}

export default Place;
