import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pregunta1Component } from './dashboard/pregunta1/pregunta1.component';
import { Pregunta2Component } from './dashboard/pregunta2/pregunta2.component';
import { Pregunta3Component } from './dashboard/pregunta3/pregunta3.component';
import { guardGuard } from './guard.guard';
import { PagenotfountComponent } from './pagenotfount/pagenotfount.component';

export const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent,
    canActivate: [guardGuard],
    children: [
      {path: "pregunta1", component: Pregunta1Component},
      {path: "pregunta2", component: Pregunta2Component},
      {path: "pregunta3", component: Pregunta3Component},

  ]
  },
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "**", component: PagenotfountComponent}


];
