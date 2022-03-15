import {CentreVaccination} from "../entity/CentreVaccination";

export class CentreVaccinationDao{
  private static centreVaccinations: CentreVaccination[] = [
    new CentreVaccination('Maison Jeunesse', '71209154', 'Marsa', 'Tunis'),
    new CentreVaccination('Lycée Pilote Ariana', '71898150', 'Ariana', 'Ariana'),
    new CentreVaccination('Palais des congrés', '71632150', 'Avenue Mohamed V', 'Tunis'),
    new CentreVaccination('Ecole primaire Jallouli', '74842153', 'Lafrane', 'Sfax'),
  ];

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
