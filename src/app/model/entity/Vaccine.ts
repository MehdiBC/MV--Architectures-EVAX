import {CentreVaccination} from "./CentreVaccination";

export class Vaccine {
  constructor(
    public type: string,
    public date: Date,
    public centre: CentreVaccination
  ) {
  }
}
