import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromUI from '../ui.reducer';

@Component({
  selector: 'choki-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {
  private keyword: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromUI.State>
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch({ type: 'STOP_LOADING' });
    }, 1000);

    this.store.subscribe(data => console.log(data));
    this.keyword = this.activatedRoute.snapshot.paramMap.get('keyword');
  }
}
