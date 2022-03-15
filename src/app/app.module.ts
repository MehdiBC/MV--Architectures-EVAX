import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentreVaccinationComponent } from './view-model/centre-vaccination/centre-vaccination.component';
import { PassCovidComponent } from './view-model/pass-covid/pass-covid.component';

@NgModule({
  declarations: [
    AppComponent,
    CentreVaccinationComponent,
    PassCovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
