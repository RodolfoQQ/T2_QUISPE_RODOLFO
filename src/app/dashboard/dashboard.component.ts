import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { ServiceService } from '../auth/service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AngularmaterialModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: ServiceService
  ){

  }

  pregunta1(){
    this.router.navigate(["pregunta1"], {relativeTo: this.route})
  }


  pregunta2(){
    this.router.navigate(["pregunta2"], {relativeTo: this.route})
  }

  pregunta3(){
    this.router.navigate(["pregunta3"], {relativeTo: this.route})
  }

  salir(){

  }
}

