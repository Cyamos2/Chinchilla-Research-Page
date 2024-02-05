import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// Define the general application configuration
export const appConfig: ApplicationConfig = {
  // Provide the router configuration using the defined routes
  providers: [
    provideRouter(routes),

    // Provide client-side hydration for rendering on the client
    provideClientHydration()
  ]
};

//ApplicationConfig is imported from @angular/core, representing the configuration for an Angular application.

//provideRouter(routes) is used to configure the Angular router with the defined routes. The routes are imported from app.routes.

//provideClientHydration() is used to enable client-side hydration. Client-side hydration is a technique used in Angular Universal to speed up initial page loads by sending a fully rendered page to the client, which can then take over rendering without waiting for additional server requests.

//The configuration is exported as appConfig, making it available for use in other parts of your application.
