/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { ApiServiceService } from 'libs/my-library/src/lib/api-service.service';
import { AppStateService } from './app-state.service';
import { MyAuthGuard } from './../../../../libs/my-library/src/lib/my-auth.guard';
import { HttpClient } from '@angular/common/http';
import { MyHttpInterceptor } from './../../../../libs/my-library/src/lib/my-http-interceptor';
import { MyErrorHandler } from './../../../../libs/my-library/src/lib/my-error-handler';
import { myBootstrapListener } from './../../../../libs/my-library/src/lib/my-bootstrap-listener';
import { AppInitializerService } from './../../../../libs/my-library/src/lib/my-app-initializer';
@Component({
  selector: 'my-nx-project-root',
  template: `
    <h1>Count: {{ count$ | async }}</h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `,
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  title = 'My App';
  count$ = this.state.select('count');

  constructor(
    private apiService: ApiServiceService,
    private state: AppStateService,
    private http: HttpClient,
    private myAuthGuard: MyAuthGuard,
    private myHttpInterceptor: MyHttpInterceptor,
    private myErrorHandler: MyErrorHandler,
    private appInitializerService: AppInitializerService
      ) {
    this.apiService.test();
  }

  ngOnInit() {
    this.http.get('https://api.example.com/data').subscribe((data) => {
      console.log('Data received:', data);
    });

    try {
      console.log('error');
    } catch (error) {
      console.error('An error occurred:', error);
    }

    this.appInitializerService.initializeApp().then(() => {
      console.log('App initialized');
    });

    myBootstrapListener();
  }

  increment() {
    this.state.incrementCount();
  }
  decrement() {
    this.state.decrementCount();
  }
}
