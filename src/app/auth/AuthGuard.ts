import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService, JwtResponse } from './auth.service';
import { emptyUser, UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService,
    private userService: UserService, private ngZone: NgZone,
  ) {}

  canActivate(): Observable<boolean> {
    console.log("Auth me called");

    return this.authService.isAuthenticated().pipe(
        map(res => {
          if (res.authenticated) {
            this.ngZone.run(() => {
              this.userService.setToken(res);
            });
            console.log('User info:', res);
            return true;
          } else {
            this.ngZone.run(() => {
              this.userService.setToken(emptyUser);
            });
            this.router.navigate(['/login']);
            return false;
          }
        }),
        catchError(err => {
            this.ngZone.run(() => {
              this.userService.setToken(emptyUser);
            });
          console.error('Error fetching /me:', err);
          this.router.navigate(['/login']);
          return of(false);
        })
      );

    // return this.authService.isAuthenticated().pipe(
    //   map(() => true),
    //   catchError(() => {
    //     console.log("Failed: isAuthenticated()");
    //     this.router.navigate(['/login']);
    //     return of(false);
    //   })
    // );
  }
}


  // constructor(protected router: Router, protected keycloak: KeycloakService) {
  //   super(router, keycloak);
  // }

  // isAccessAllowed(): Promise<boolean> {
  //   return new Promise((resolve) => {
  //     if (!this.authenticated) {
  //       this.keycloak.login();
  //       resolve(false);
  //       return;
  //     }
  //     this.router.navigate(['/dashboard']);
  //     resolve(true);
  //   });
  // }