/*
 =========================================================
 * Black Dashboard Angular - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard-angular
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { APP_INITIALIZER, enableProdMode } from "@angular/core";

import { environment } from "./environments/environment";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter, withDebugTracing, withRouterConfig } from '@angular/router';
import { appRoutes } from "./app/app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideToastr } from "ngx-toastr";
import { authInterceptor } from "./app/auth/auth.interceptor";

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideToastr(
      {
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      }),
      provideRouter(appRoutes,
       withDebugTracing(),
        withRouterConfig({paramsInheritanceStrategy: 'always'})
      ),
      provideHttpClient(withInterceptors([authInterceptor]))
    // KeycloakService,
    //  {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService],
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: KeycloakBearerInterceptor,
    //   multi: true,
    // },
  ],
}).catch((err) => console.error(err));