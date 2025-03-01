import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-imc.component.html',
  styleUrls: ['./formulario-imc.component.css']
})
export class FormularioImcComponent {
  nombre: string = '';
  sexo: string = 'M';
  peso: number = 70;
  altura: number = 170;

  @Output() imcCalculado = new EventEmitter<any>();

  setSexo(valor: string) {
    this.sexo = valor;
  }

  modificarPeso(valor: number) {
    this.peso += valor;
  }

  modificarAltura(valor: number) {
    this.altura += valor;
  }

  calcularIMC() {
    const alturaMetros = this.altura / 100;
    const imc = this.peso / (alturaMetros * alturaMetros);
    this.imcCalculado.emit({ nombre: this.nombre, sexo: this.sexo, imc: imc.toFixed(2) });
  }
}