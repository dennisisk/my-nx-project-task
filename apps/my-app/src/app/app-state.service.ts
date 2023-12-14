import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';

@Injectable({ providedIn: 'root' })
export class AppStateService extends RxState<{ count: number }> {
  constructor() {
    super();
    this.set({ count: 0 });
  }

  incrementCount() {
    this.set({ count: this.get().count + 1 });
  }
  decrementCount() {
    this.set({ count: this.get().count - 1 });
  }
}
