import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}
  
  url:string = "";

  ngOnInit() {
    this.url = environment.backend_base_url + "/auth/me";
  }

  isAuthenticated() {
    return this.http.get<JwtResponse>(environment.backend_base_url + "/auth/me", { withCredentials: true });
  }

  logout(): void {
    let url = environment.backend_base_url+ "/logout";
    console.log("Logout called: "+ url);
    window.location.assign(url);
  }
}

export interface JwtResponse {
  authenticated: boolean;
  username?: string;
  email?: string;
  roles?: string[];
  permissions?: string[];
  accessToken?: string;
}