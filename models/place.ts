import { IPlace } from "../types/place";

class Place implements IPlace {
  title: string;
  id: string;
  location: { lat: number; lng: number };
  imageUrl: any;
  address?: string;
  constructor({ id, title, imageUrl, location, address }: IPlace) {
    this.title = title;
    this.id = new Date().toString() + Math.random().toString();
    this.location = location;
    this.imageUrl = imageUrl;
    this.address = address;
  }
}

export default Place;
