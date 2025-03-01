import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ImcResultado {
  nombre: string;
  sexo: string;
  imc: string;
  mensaje: string;
  esPesoIdeal: boolean;
}

@Component({
  selector: 'app-formulario-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-imc.component.html',
  styleUrls: ['./formulario-imc.component.css']
})
export class FormularioImcComponent {
  nombre: string = '';
  sexo: string = '';
  peso: number = 70;
  altura: number = 1.75;

  @Output() imcCalculado = new EventEmitter<ImcResultado>();

  setSexo(valor: string): void {
    this.sexo = valor;
  }

  modificarPeso(valor: number): void {
    this.peso += valor;
  }

  modificarAltura(valor: number): void {
    this.altura += valor;
  }

  calcularIMC(): void {
    if (this.nombre && this.peso && this.altura) {
      const imc = this.peso / (this.altura * this.altura);
      let mensaje = '';
      let esPesoIdeal = false;
      if (imc >= 18.5 && imc <= 24.9) {
        mensaje = 'Estás en tu peso ideal';
        esPesoIdeal = true;
      } else {
        mensaje = 'No estás en tu peso ideal';
      }
      this.imcCalculado.emit({ nombre: this.nombre, sexo: this.sexo, imc: imc.toFixed(2), mensaje, esPesoIdeal });
    }
  }
}
