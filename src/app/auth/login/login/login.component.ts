import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularmaterialModule } from '../../../angularmaterial/angularmaterial.module';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularmaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  static readonly usuario: string = 'quispe';
  static readonly password: string = '12345';


  constructor(private router: Router,
    private authService: ServiceService
  ){

  }

  iniciarsesion(usuario: HTMLInputElement, password: HTMLInputElement): void {
    if (usuario.value === LoginComponent.usuario && password.value === LoginComponent.password) {
      this.authService.login(usuario.value, password.value);
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

}
