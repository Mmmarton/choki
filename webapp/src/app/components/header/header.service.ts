import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

export type HeaderState = 'HIDDEN' | 'LARGE' | 'SMALL';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerState: HeaderState;

  constructor(router: Router) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.includes('/home')) {
          this.headerState = 'HIDDEN';
        } else if (event.urlAfterRedirects.includes('/list')) {
          this.headerState = 'LARGE';
        } else {
          this.headerState = 'SMALL';
        }
      }
    });
  }

  setHeaderState(state: HeaderState) {
    this.headerState = state;
  }

  getHeaderState(): HeaderState {
    return this.headerState;
  }
}
