import { Router, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';


export const appRoutes: Routes = [
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // Lazy-load AdminLayoutModule
  {
    path: '',
    loadChildren: () =>
      import('./layouts/admin-layout/admin-layout.module').then(
        (m) => m.AdminLayoutModule
      )
  },

  // Lazy-load AuthLayoutModule
  {
    path: 'auth',
    loadChildren: () =>
      import('./layouts/auth-layout/auth-layout.module').then(
        (m) => m.AuthLayoutModule
      ),
  },

  { path: '**', redirectTo: 'dashboard' },
];