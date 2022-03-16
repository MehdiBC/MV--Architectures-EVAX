import {CentreVaccination} from "../entity/CentreVaccination";

export class CentreVaccinationDao{
  private static centreVaccinations: CentreVaccination[] = [
    new CentreVaccination('Maison Jeunesse', '71209154', 'Marsa', 'Tunis'),
    new CentreVaccination('Lycée Pilote Ariana', '71898150', 'Ariana', 'Ariana'),
    new CentreVaccination('Palais des congrés', '71632150', 'Avenue Mohamed V', 'Tunis'),
    new CentreVaccination('Ecole primaire Jallouli', '74842153', 'Lafrane', 'Sfax'),
  ];

  static getByFilters(filters?: {governorate?: string, name?: string}): CentreVaccination[]{
    if(filters?.governorate && filters?.name){
      return CentreVaccinationDao.centreVaccinations.filter(
        (centreVaccination)=>
          centreVaccination.governorate === filters?.governorate &&
          centreVaccination.name.includes(filters.name as string)
      );
    } else if (filters?.name){
      return CentreVaccinationDao.centreVaccinations.filter(
        (centreVaccination)=> centreVaccination.name.includes(filters.name as string)
      );
    } else if (filters?.governorate) {
      return CentreVaccinationDao.centreVaccinations.filter(
        (centreVaccination) => centreVaccination.governorate === filters.governorate
      );
    }
    return CentreVaccinationDao.centreVaccinations;
  }

}
