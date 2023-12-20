import { Injectable, InjectionToken, Inject, inject } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RxState } from '@rx-angular/state';

export const API_TOKEN = new InjectionToken<string>('API_TOKEN');

export interface IData {
  data: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService extends RxState<IData> {
  private readonly httpClient = inject(HttpClient);

  private readonly parameter$ = new Subject<void>();

  private getDataSubscription = this.parameter$.pipe(
    switchMap(() => this.callApiGetData()),
    tap((data) => this.set({ data }))
  ).subscribe();

  constructor(@Inject(API_TOKEN) private apiValue: string) {
    super();
    this.set({ data: null });
  }

  test() : void{
    console.log('ApiService test()', 'API Value:', this.apiValue);
  }

  private callApiGetData () {
    return of().pipe(delay(500));
  }

  getDataByid() {
    this.parameter$.next();
  }
}
