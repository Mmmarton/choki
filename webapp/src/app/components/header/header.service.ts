import { Injectable } from '@angular/core';

export type HeaderState = 'HIDDEN' | 'LARGE' | 'SMALL';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerState: HeaderState;

  constructor() {
    this.headerState = 'HIDDEN';
  }

  setHeaderState(state: HeaderState) {
    this.headerState = state;
  }

  getHeaderState(): HeaderState {
    return this.headerState;
  }
}
