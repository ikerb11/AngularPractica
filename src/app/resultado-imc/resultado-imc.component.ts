import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ImcResultado {
  nombre: string;
  sexo: string;
  imc: string;
  mensaje: string;
  esPesoIdeal: boolean;
}

@Component({
  selector: 'app-resultado-imc',
  standalone: true,
  imports: [CommonModule], // Agregar CommonModule para usar *ngIf
  templateUrl: './resultado-imc.component.html',
  styleUrls: ['./resultado-imc.component.css']
})
export class ResultadoImcComponent {
  @Input() resultado: ImcResultado | null = null;
}
