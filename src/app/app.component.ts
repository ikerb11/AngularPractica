import { Component } from '@angular/core';
import { FormularioImcComponent } from './components/formulario-imc/formulario-imc.component';
import { ResultadoImcComponent } from './resultado-imc/resultado-imc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioImcComponent, ResultadoImcComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultadoIMC: any = null;

  actualizarResultado(imcData: any) {
    this.resultadoIMC = imcData;
  }
}
