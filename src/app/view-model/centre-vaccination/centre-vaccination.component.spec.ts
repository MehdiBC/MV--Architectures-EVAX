import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreVaccinationComponent } from './centre-vaccination.component';

describe('CentreVaccinationComponent', () => {
  let component: CentreVaccinationComponent;
  let fixture: ComponentFixture<CentreVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreVaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
