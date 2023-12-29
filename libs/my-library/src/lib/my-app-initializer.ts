import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  initializeApp(): Promise<any> {
    // Your initialization logic here
    console.log('App initialization logic');
    
    // Simulating an asynchronous operation
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('App initialization completed');
      }, 2000); // Simulating a 2-second delay
    });
  }
}