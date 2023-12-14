import { NgModule, ModuleWithProviders } from '@angular/core';
import { ApiServiceService, API_TOKEN } from './api-service.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class ApiServiceModule {
  static forRoot(apiValue: string): ModuleWithProviders<ApiServiceModule> {
    return {
      ngModule: ApiServiceModule,
      providers: [
        {
          provide: API_TOKEN,
          useValue: apiValue,
        },
        ApiServiceService,
      ],
    };
  }
}

export { API_TOKEN };
