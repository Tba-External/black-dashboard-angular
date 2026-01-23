// import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { catchError, throwError } from "rxjs";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     return next.handle(req).pipe(
//       catchError(err => {
//         if (err.status === 401) {
//           window.location.href = '/login';
//         }
//         return throwError(() => err);
//       })
//     );
//   }
// }



import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { map, switchMap, take } from 'rxjs';



export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const userService = inject(UserService);

  return userService.user$.pipe(
    take(1), // take the latest value
    map(user => {
      if (user?.accessToken) {
        req = req.clone({
          setHeaders: { Authorization: `Bearer ${user.accessToken}` }
        });
      }
      return req;
    }),
    switchMap(reqWithAuth => next(reqWithAuth)) // continue the request
  );
};