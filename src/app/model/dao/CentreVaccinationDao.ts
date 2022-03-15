import {CentreVaccination} from "../entity/CentreVaccination";

export class CentreVaccinationDao{
  private static centreVaccinations: CentreVaccination[];

  private constructor() {
    CentreVaccinationDao.centreVaccinations = [];
  }

  static getByFilters(governorate?: string, name?: string): CentreVaccination[]{
    if(governorate && name){
      return CentreVaccinationDao.centreVaccinations.filter(
        (centreVaccination)=>
          centreVaccination.governorate === governorate &&
          centreVaccination.name === name
      );
    } else if (name){
      return CentreVaccinationDao.centreVaccinations.filter(
        (centreVaccination)=> centreVaccination.name === name
      );
    } else if (governorate) {
      return CentreVaccinationDao.centreVaccinations.filter(
        (centreVaccination) => centreVaccination.governorate === governorate
      );
    }
    return CentreVaccinationDao.centreVaccinations
  }

}
