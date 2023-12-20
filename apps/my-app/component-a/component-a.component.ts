import { Component } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ApiServiceService } from '../../../libs/my-library/src/lib/api-service.service';

@Component({
  selector: 'my-nx-project-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
})
export class ComponentAComponent {

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.apiService.getDataByid();
  }

  data$ = this.apiService.select('data');
}
