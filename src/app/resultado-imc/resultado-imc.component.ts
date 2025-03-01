import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado-imc',
  standalone: true,
  imports: [CommonModule], // Agregar CommonModule para usar *ngIf
  templateUrl: './resultado-imc.component.html',
  styleUrls: ['./resultado-imc.component.css']
})
export class ResultadoImcComponent {
  @Input() resultado: any;
}
