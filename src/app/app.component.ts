import { Component } from '@angular/core';
import { FormularioImcComponent } from './components/formulario-imc/formulario-imc.component';
import { ResultadoImcComponent } from './resultado-imc/resultado-imc.component';

interface ImcResultado {
  nombre: string;
  sexo: string;
  imc: string;
  mensaje: string;
  esPesoIdeal: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioImcComponent, ResultadoImcComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultadoIMC: ImcResultado | null = null;

  actualizarResultado(imcData: ImcResultado): void {
    this.resultadoIMC = imcData;
  }
}
