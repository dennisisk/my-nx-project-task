import { Component } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ApiServiceService } from '../../../libs/my-library/src/lib/api-service.service';

@Component({
  selector: 'my-nx-project-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
})
export class ComponentBComponent {

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getDataByid();
  }

  data$ = this.apiService.select('data');
}
