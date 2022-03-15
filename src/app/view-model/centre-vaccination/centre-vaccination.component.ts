import { Component, OnInit } from '@angular/core';
import { CentreVaccination } from "../../model/entity/CentreVaccination";
import { CentreVaccinationDao } from "../../model/dao/CentreVaccinationDao";

@Component({
  selector: 'app-centre-vaccination',
  templateUrl: '../../view/centre-vaccination/centre-vaccination.component.html',
  styleUrls: ['../../view/centre-vaccination/centre-vaccination.component.css']
})
export class CentreVaccinationComponent implements OnInit {
  centreVaccinations: CentreVaccination[];
  governorats: string[] = [];
  selectedGovernorat: string = 'All';
  insertedName:string='';

  constructor() {
    this.centreVaccinations = CentreVaccinationDao.getByFilters();
  }

  ngOnInit(): void {
    this.centreVaccinations.map(centreVaccination => {
      if (this.governorats.indexOf(centreVaccination.governorate) === -1) {
        this.governorats.push(centreVaccination.governorate)
      }
    })
  }

  changeGovernorat() {
    if (this.selectedGovernorat!='All')
    this.centreVaccinations = CentreVaccinationDao.getByFilters(this.selectedGovernorat);
    else 
    this.centreVaccinations = CentreVaccinationDao.getByFilters();
  }
}
