import { ComponentBComponent } from './component-b/component-b.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { API_TOKEN } from '@my-nx-project/my-library';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';

// import { ApiServiceService } from 'libs/my-library/src/lib/api-service.service';

@NgModule({
  declarations: [AppComponent, ComponentAComponent, ComponentBComponent],
  imports: [BrowserModule, CommonModule],
  providers: [{ provide: API_TOKEN, useValue: 'Value for App 1' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
