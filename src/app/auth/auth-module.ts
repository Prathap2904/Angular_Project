import { NgModule } from '@angular/core';


import { AuthRoutingModule } from './auth-routing-module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
