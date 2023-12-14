import { Component } from '@angular/core';
import { ApiServiceService } from 'libs/my-library/src/lib/api-service.service';

@Component({
  selector: 'my-nx-project-root',
  template: `
    <h1>
      {{ title }}
    </h1>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My App 2';

  constructor(private apiService: ApiServiceService) {
    this.apiService.test();
  }
}