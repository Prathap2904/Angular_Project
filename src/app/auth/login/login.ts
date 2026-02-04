import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "../auth-routing-module";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, AuthRoutingModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
email = '';
  password = '';
  errorMsg = '';
 

  constructor(private authService: AuthService, private router: Router) {}

login() {
  const isValid = this.authService.login(this.email, this.password);

  if (isValid) {
    this.router.navigate(['/products']);
  } else {
    this.errorMsg = 'Invalid email or password';
  }
}
}
