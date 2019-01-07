import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';

@Component({
  selector: 'choki-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  keyword: string;

  constructor(private router: Router, private store: Store<fromRoot.State>) {}

  ngOnInit() {}

  keywordChanged(event: any) {
    if (event.key === 'Enter') {
      this.store.dispatch(new UI.StartLoading());
      this.router.navigate(['list/', this.keyword ? this.keyword : '']);
    }
  }
}
