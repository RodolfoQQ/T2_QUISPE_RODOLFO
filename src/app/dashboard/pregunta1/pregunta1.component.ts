import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularmaterialModule } from '../../angularmaterial/angularmaterial.module';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [AngularmaterialModule, FormsModule],
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component {
  precioUnitario: number = 0;
  cantidad: number = 0;
  total: number | null = null;

  calcularTotal(): void {
    let descuento = 0;

    if (this.cantidad > 20) {
      descuento = 0.10;
    } else if (this.cantidad > 10) {
      descuento = 0.05;
    }

    const precioTotal = this.precioUnitario * this.cantidad;
    this.total = precioTotal - (precioTotal * descuento);
  }
}
