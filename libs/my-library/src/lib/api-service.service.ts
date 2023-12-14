import { Injectable, InjectionToken, Inject } from '@angular/core';

export const API_TOKEN = new InjectionToken<string>('API_TOKEN');

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(@Inject(API_TOKEN) private apiValue: string) {}

  test() {
    console.log('ApiService test()', 'API Value:', this.apiValue);
  }
}