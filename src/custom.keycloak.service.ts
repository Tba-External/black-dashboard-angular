import { Injectable } from '@angular/core';
import { KeycloakService, KeycloakOptions } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
 class CustomKeycloakService {

  constructor(private keycloak: KeycloakService) {}

  public init(): Promise<boolean> {
    const options: KeycloakOptions = {
      config: {
        url: 'https://localhost:8443/',
        realm: 'amsi',
        clientId: 'amsi-client'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
        flow: 'standard',
        pkceMethod: 'S256'
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
      bearerExcludedUrls: ['/assets']
    };

    return this.keycloak.init(options);
  }
}