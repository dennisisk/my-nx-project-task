import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { API_TOKEN } from '@my-nx-project/my-library';
import { ApiServiceService } from 'libs/my-library/src/lib/api-service.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: API_TOKEN, useValue: 'Value for App 2' }, ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}