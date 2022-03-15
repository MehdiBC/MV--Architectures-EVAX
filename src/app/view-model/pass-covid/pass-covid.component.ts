import { Component, OnInit } from '@angular/core';
import {User} from "../../model/entity/User";
import {UserDao} from "../../model/dao/UserDao";

@Component({
  selector: 'app-pass-covid',
  templateUrl: '../../view/pass-covid/pass-covid.component.html',
  styleUrls: ['../../view/pass-covid/pass-covid.component.css']
})
export class PassCovidComponent implements OnInit {
  user: User | undefined;
  numInscription: string = '';

  constructor() {
    this.user = undefined;
  }

  ngOnInit(): void {
  }

  updateUser() {
    this.user = UserDao.getUserByNumInscription(this.numInscription);
  }
}
