import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  // 🔹 In-memory users list
  private users: User[] = [
    {
      name: 'Sindhuja',
      email: 'sindhuja@gmail.com',
      password: 'Sindhuja@123'
    },
    {
      name: 'Saravanan',
      email: 'saravanan@gmail.com',
      password: 'Saravanan@123'
    }
  ];

  private currentUser?: User;

  constructor(private router: Router) {}

  // 🔹 Register: add user to array
  addUser(user: User): boolean {
    const exists = this.users.some(u => u.email === user.email);
    if (exists) {
      return false; // ❌ already registered
    }
    this.users.push(user); // ✅ add user
    return true;
  }

  // 🔹 Login: validate credentials
  login(email: string, password: string): boolean {
    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.currentUser = user;
      this.router.navigate(['/auth/flash']);
      return true;
    }
    return false;
  }

  // 🔹 Get logged-in user name (for Flash screen)
  getUserName(): string {
    return this.currentUser?.name || '';
  }

  // 🔹 Logout
  logout(): void {
    this.currentUser = undefined;
    this.router.navigate(['/auth/login']);
  }
}
