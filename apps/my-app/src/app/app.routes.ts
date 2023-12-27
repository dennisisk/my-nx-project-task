import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentAComponent } from '../component-a/component-a.component';
import { ComponentBComponent } from '../component-b/component-b.component';

export const appRoutes: Route[] = [
    { path: 'test', component: AppComponent }, 
    { path: 'test1', component: ComponentAComponent }, 
    { path: 'test2', component: ComponentBComponent }, 
];
