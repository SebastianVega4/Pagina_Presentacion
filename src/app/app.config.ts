import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideMatomo, withRouter } from 'ngx-matomo-client';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation()),
    provideMatomo(
      {
        siteId: environment.matomo.siteId,
        trackerUrl: environment.matomo.trackerUrl,
        scriptUrl: 'https://cdn.matomo.cloud/sebastianvega.matomo.cloud/matomo.js',
        enableLinkTracking: true,
        enableJSErrorTracking: true,
        acceptDoNotTrack: false,
      },
      withRouter({
        prependBaseHref: true,
        trackPageTitle: true,
      }),
    ),
  ],
};
