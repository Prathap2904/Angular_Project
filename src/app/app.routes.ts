import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Flash } from './auth/flash/flash';
import { Product } from './products/product/product';
import { Productgrid } from './productgrid/productgrid';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  { path: 'auth/login', component: Login },
  { path: 'auth/register', component: Register },
  { path: 'auth/flash', component: Flash },
   { path: 'products', component: Product },
   {path:'productgrid',component:Productgrid},

  { path: '**', redirectTo: 'auth/login' }

];
