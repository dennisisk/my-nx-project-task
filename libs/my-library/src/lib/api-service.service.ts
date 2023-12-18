import { Injectable, InjectionToken, Inject } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const API_TOKEN = new InjectionToken<string>('API_TOKEN');

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(@Inject(API_TOKEN) private apiValue: string) {}

  test() {
    console.log('ApiService test()', 'API Value:', this.apiValue);
  }

  getData() {
    return of('Data from API').pipe(delay(1000));
  }
}
