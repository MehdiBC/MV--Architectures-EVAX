import {Vaccine} from "./Vaccine";

export class User{
  constructor(
    public numInscription: string,
    public firstName: string,
    public lastName: string,
    public cin: string,
    public birthdate: string,
    public vaccines: Vaccine[],
  ) {
  }
}
