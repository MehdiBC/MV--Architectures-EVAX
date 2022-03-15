import { Component, OnInit } from '@angular/core';
import {CentreVaccination} from "../../model/entity/CentreVaccination";
import {CentreVaccinationDao} from "../../model/dao/CentreVaccinationDao";

@Component({
  selector: 'app-centre-vaccination',
  templateUrl: '../../view/centre-vaccination/centre-vaccination.component.html',
  styleUrls: ['../../view/centre-vaccination/centre-vaccination.component.css']
})
export class CentreVaccinationComponent implements OnInit {
  centreVaccinations: CentreVaccination[];
  constructor() {
    this.centreVaccinations = CentreVaccinationDao.getByFilters();
  }

  ngOnInit(): void {
  }

}
