import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { CommonModule } from '@angular/common';  // Importar CommonModule para *ngIf y otras directivas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Asegúrate de que CommonModule esté aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  sex: string = '';
  weight: number = 70;
  height: number = 1.75;
  imcMessage: string = '';  // Mensaje para mostrar el resultado del IMC

  results: Array<{ name: string, imc: number, message: string }> = [];

  adjustWeight(amount: number) {
    this.weight += amount;
  }

  adjustHeight(amount: number) {
    this.height += amount;
  }

  clearForm() {
    this.name = '';
    this.sex = '';
    this.weight = 70;
    this.height = 1.75;
    this.imcMessage = '';  // Limpiar mensaje cuando se borra el formulario
  }

  calculateIMC() {
    // Verificamos que los valores de peso y altura sean válidos
    if (this.name && this.weight && this.height) {
      const imc = this.weight / (this.height * this.height);
      let message = '';

      if (imc < 18.5) {
        message = 'No estás en tu peso ideal. Estás por debajo de tu peso ideal.';
      } else if (imc >= 18.5 && imc < 24.9) {
        message = '¡Estás en tu peso ideal!';
      } else {
        message = 'No estás en tu peso ideal. Estás por encima de tu peso ideal.';
      }

      // Actualizamos el mensaje
      this.imcMessage = message;

      // Agregar el resultado al listado
      this.results.push({ name: this.name, imc, message });
    } else {
      this.imcMessage = 'Por favor, ingresa todos los datos antes de calcular.';
    }
  }
}
