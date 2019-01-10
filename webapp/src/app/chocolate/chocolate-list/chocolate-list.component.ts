import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import * as UI from '../../shared/ui.actions';
import * as CHOCOLATE from '../chocolate.actions';
import { ChocolateFilters } from '../chocolate.model';

@Component({
  selector: 'choki-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {
  isLoading$: Observable<boolean>;
  keyword: string;
  filters: ChocolateFilters;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.fetchChocolates();

    this.store
      .select(fromRoot.getFilters)
      .subscribe(filters => (this.filters = filters));

    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.keyword = this.activatedRoute.snapshot.paramMap.get('keyword');
  }

  updateSecret() {
    this.store.dispatch(new CHOCOLATE.SetFilters(this.filters));
  }

  private fetchChocolates() {
    this.store.dispatch(new UI.StartLoading());
    setTimeout(() => {
      this.store.dispatch(new UI.StopLoading());
    }, 1000);
  }
}
