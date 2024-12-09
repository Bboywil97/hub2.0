import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private router: Router) {} // Inyecta Router

  navigateToDashboard() {
    this.router.navigate(['/dashboard']); // Navega al dashboard
  }
}
