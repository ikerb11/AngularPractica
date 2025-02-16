import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-imc',
  templateUrl: './formulario-imc.component.html',
  styleUrls: ['./formulario-imc.component.css']
})
export class FormularioImcComponent {
  nombre: string = '';
  sexo: string = '';
  altura: number | null = null;
  peso: number | null = null;
  resultado: string = '';

  calcularIMC() {
    if (this.peso && this.altura) {
      const imc = this.peso / (this.altura * this.altura);
      if (imc >= 18.5 && imc <= 24.9) {
        this.resultado = `${this.nombre}, estás en tu peso ideal.`;
      } else {
        this.resultado = `${this.nombre}, no estás en tu peso ideal.`;
      }
    } else {
      this.resultado = 'Por favor, ingresa todos los datos.';
    }
  }
}