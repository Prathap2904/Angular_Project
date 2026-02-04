import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
 name = '';
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) {}

  register() {
    const newUser: User = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    const success = this.authService.addUser(newUser);

    if (success) {
      this.message = 'Registration successful';
    } else {
      this.message = 'Email already exists';
    }
  }
}
