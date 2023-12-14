import { Component } from '@angular/core';
import { ApiServiceService } from 'libs/my-library/src/lib/api-service.service';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'my-nx-project-root',
  template: `
    <h1>Count: {{ count$ | async }}</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My App';
  count$ = this.state.select('count');

  constructor(
    private apiService: ApiServiceService,
    private state: AppStateService
  ) {
    this.apiService.test();
  }

  increment() {
    this.state.incrementCount();
  }
  decrement() {
    this.state.decrementCount();
  }
}
