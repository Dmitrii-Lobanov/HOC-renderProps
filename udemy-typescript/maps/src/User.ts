import { name as userName, address } from 'faker';
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number
  };
  color: string = 'red';

  constructor() {
    this.name = userName.firstName();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude())
    }
  };

  public markerContent(): string {
    return `
      <div>
        <h1>User name: ${this.name}</h1>
        <h3>Coords: ${this.location.lat}, ${this.location.lng}</h3>
      </div>`;
  }
}