import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importar FormsModule aquí

@Component({
  selector: 'app-root',
  standalone: true,  // Indica que este es un componente independiente
  imports: [FormsModule],  // Agregar FormsModule a imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  sex: string = '';
  weight: number = 70;
  height: number = 1.75;

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
  }

  calculateIMC() {
    const imc = this.weight / (this.height * this.height);
    let message = '';

    if (imc < 18.5) {
      message = 'Estás por debajo de tu peso ideal.';
    } else if (imc >= 18.5 && imc < 24.9) {
      message = 'Estás en tu peso ideal.';
    } else {
      message = 'Estás por encima de tu peso ideal.';
    }

    this.results.push({ name: this.name, imc, message });
  }
}
