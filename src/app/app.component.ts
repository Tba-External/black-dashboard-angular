import { Component } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { provideToastr } from 'ngx-toastr';
import { AdminLayoutModule } from "./layouts/admin-layout/admin-layout.module";
import { AuthLayoutModule } from "./layouts/auth-layout/auth-layout.module";
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
    NgbModule
  ]
})
export class AppComponent {
    title = 'black-dashboard-angular';
}