import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { JwtResponse } from "src/app/auth/auth.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "auth-app-dashboard",
  templateUrl: "auth.dashboard.component.html"
})
export class AuthDashboardComponent implements OnInit {

  public username: string = ""
  public token: any;
  private subscription!: Subscription;
  // constructor(private keycloakService: KeycloakService) {}

  constructor(private userService: UserService) { }

  user$: Observable<JwtResponse | null>;
  ngOnInit(): void {
    
    // Subscribe to user$
    this.subscription = this.userService.user$.subscribe(token => {
      this.username = token.username;
      this.token = token;
      console.log("Token :"+ JSON.stringify(this.token));
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // prevent memory leaks
  }
}
