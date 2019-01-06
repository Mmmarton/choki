import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromUi from '../ui.reducer';

@Component({
  selector: 'choki-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  keyword: string;

  constructor(private router: Router, private store: Store<fromUi.State>) {}

  ngOnInit() {}

  keywordChanged(event: any) {
    if (event.key === 'Enter') {
      this.store.dispatch({type: 'START_LOADING'});
      this.router.navigate(['list/', this.keyword ? this.keyword : '']);
    }
  }
}
