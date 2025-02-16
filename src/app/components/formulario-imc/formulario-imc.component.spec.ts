import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioImcComponent } from './formulario-imc.component';

describe('FormularioImcComponent', () => {
  let component: FormularioImcComponent;
  let fixture: ComponentFixture<FormularioImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioImcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
