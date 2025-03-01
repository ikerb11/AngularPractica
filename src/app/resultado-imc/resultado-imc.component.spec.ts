import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoImcComponent } from './resultado-imc.component';

describe('ResultadoImcComponent', () => {
  let component: ResultadoImcComponent;
  let fixture: ComponentFixture<ResultadoImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoImcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
