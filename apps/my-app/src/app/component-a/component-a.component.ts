import { Component } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ApiServiceService } from '../../../../../libs/my-library/src/lib/api-service.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'my-nx-project-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
})
export class ComponentAComponent {
  constructor(private apiService: ApiServiceService, private router: Router) {}

  ngOnInit() {
    this.apiService.getDataByid();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Navigation End:', event.url);
      }
    });
  }

  data$ = this.apiService.select('data');
}
