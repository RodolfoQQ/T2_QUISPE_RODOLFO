import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularmaterialModule } from '../../angularmaterial/angularmaterial.module';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [AngularmaterialModule, FormsModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {

  cantidad: number = 0;
  total: number | null = null;

  calcularTotal(): void {
    const precioLlanta = this.cantidad < 5 ? 800 : 700;
    this.total = this.cantidad * precioLlanta;
  }
}
