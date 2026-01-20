import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
email = '';
  password = '';
  errorMsg = '';

  constructor(private authService: AuthService) {}

  login() {
    const isValid = this.authService.login(this.email, this.password);
    if (!isValid) {
      this.errorMsg = 'Invalid email or password';
    }
  }
}
