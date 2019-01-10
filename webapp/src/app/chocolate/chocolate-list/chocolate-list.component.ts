import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import * as UI from '../../shared/ui.actions';
import * as CHOCOLATE from '../chocolate.actions';

@Component({
  selector: 'choki-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {
  isLoading$: Observable<boolean>;
  keyword: string;
  secret: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.fetchChocolates();

    this.store
      .select(fromRoot.getSecret)
      .subscribe(secret => (this.secret = secret));

    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.keyword = this.activatedRoute.snapshot.paramMap.get('keyword');
  }

  updateSecret() {
    this.store.dispatch(new CHOCOLATE.SetSecret(this.secret));
  }

  private fetchChocolates() {
    this.store.dispatch(new UI.StartLoading());
    setTimeout(() => {
      this.store.dispatch(new UI.StopLoading());
    }, 1000);
  }
}
