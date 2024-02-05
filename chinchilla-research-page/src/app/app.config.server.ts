import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

// Define server-specific configuration
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

// Merge the general application configuration with the server-specific configuration
export const config = mergeApplicationConfig(appConfig, serverConfig);


//It imports necessary functions and types from Angular's core and platform-server modules.
//It imports the general application configuration from app.config.
//It defines a serverConfig object with specific providers for server rendering using provideServerRendering.
//The mergeApplicationConfig function is used to merge the general application configuration with the server-specific configuration.
//The merged configuration is exported as config.
