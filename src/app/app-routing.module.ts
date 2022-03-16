import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CentreVaccinationComponent} from "./view-model/centre-vaccination/centre-vaccination.component";
import {PassCovidComponent} from "./view-model/pass-covid/pass-covid.component";

const routes: Routes = [
  {path: '', component: CentreVaccinationComponent},
  {path: 'pass', component: PassCovidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
