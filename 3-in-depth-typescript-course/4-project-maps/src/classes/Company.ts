import { faker } from "@faker-js/faker";
import { Mappable } from "./GoogleMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number,
    lng: number,
  }

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h3>Company name: ${this.companyName}</h3>
      <p>Slogan: ${this.catchPhrase}</p>
    </div>`;
  }
}