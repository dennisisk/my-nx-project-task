import { APP_BOOTSTRAP_LISTENER } from '@angular/core';

export function myBootstrapListener() {
  return () => {
    // Perform tasks on application bootstrap
    console.log('App Bootstrapped');
  };
}