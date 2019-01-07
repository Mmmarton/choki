import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';

@Component({
  selector: 'choki-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {
  isLoading$: Observable<boolean>;

  private keyword: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch(new UI.StopLoading());
    }, 1000);

    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.keyword = this.activatedRoute.snapshot.paramMap.get('keyword');
  }
}
