import { APP_INITIALIZER } from '@angular/core';

export function myAppInitializer(): () => Promise<void> {
  return () =>
    new Promise<void>((resolve, reject) => {
      // Perform initialization tasks here
      console.log('App Initialization');
      resolve();
    });
}