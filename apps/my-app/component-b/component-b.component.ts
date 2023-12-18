import { Component } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ApiServiceService } from '../../../libs/my-library/src/lib/api-service.service';

@Component({
  selector: 'my-nx-project-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
})
export class ComponentBComponent {
  data$ = this.apiService.getData();

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.data$.subscribe((data) => console.log('Component A Data:', data));
  }
}
