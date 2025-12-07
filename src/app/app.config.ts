import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideDefaultClient } from '../api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideDefaultClient({ basePath: 'http://localhost:8080' }),
  ],
};
