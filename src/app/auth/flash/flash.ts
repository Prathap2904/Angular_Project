import { Component } from '@angular/core';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-flash',
  imports: [],
  templateUrl: './flash.html',
  styleUrl: './flash.css',
})
export class Flash {
 userName = '';

  constructor(private authService: AuthService) {
    this.userName = this.authService.getUserName();
  }
}
