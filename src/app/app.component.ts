import { APP_INITIALIZER, Component, inject } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
import { KeycloakAngularModule, KeycloakBearerInterceptor, KeycloakService } from "keycloak-angular";
import { RouterOutlet } from "@angular/router";
// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
//   styleUrls: ["./app.component.scss"]
// })
// export class AppComponent {
//   title = "black-dashboard-angular";
// }


@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ComponentsModule,
    NgbModule,
    KeycloakAngularModule,
  ]
})
export class AppComponent {
  // private keycloak = inject(KeycloakService);
  title = 'black-dashboard-angular';

}