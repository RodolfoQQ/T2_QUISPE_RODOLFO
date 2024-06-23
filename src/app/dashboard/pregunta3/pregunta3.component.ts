import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularmaterialModule } from '../../angularmaterial/angularmaterial.module';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [AngularmaterialModule, FormsModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {

  cantidad!: number
  precio!: number
  total!: number
  totalConDescuento!: number

  calcularTotal(): void {
    const valorTotal = this.cantidad * this.precio;
    if (valorTotal > 200) {
      this.totalConDescuento = valorTotal * 0.8;
    } else {
      this.totalConDescuento = valorTotal;
    }
    this.total = valorTotal;
  }
}
