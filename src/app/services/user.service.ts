import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtResponse } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private userSubject = new BehaviorSubject<JwtResponse>(emptyUser);
  public user$: Observable<JwtResponse> = this.userSubject.asObservable(); // observable for components

  constructor() { }

  // Call this to update the user
  setToken(user: JwtResponse) {
    if (!user) {
      user = emptyUser
    }
    console.log("Response stored: "+ user.email);
    this.userSubject.next(user);
  }

}

export const emptyUser: JwtResponse = {
  username: '',
  email: '',
  roles: [],
  permissions: [],
  authenticated: false,
  accessToken: ''
};