import { Component } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ApiServiceService } from '../../../libs/my-library/src/lib/api-service.service';

@Component({
  selector: 'my-nx-project-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
})
export class ComponentAComponent {
  data$ = this.apiService.getData();

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.data$.subscribe((data) => console.log('Component A Data:', data));
  }
}
