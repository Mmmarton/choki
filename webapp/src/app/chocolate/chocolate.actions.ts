import { Action } from '@ngrx/store';
import { ChocolateFilters } from './chocolate.model';

export const SET_FILTERS = '[CHOCOLATE] set the filters';

export class SetFilters implements Action {
  readonly type = SET_FILTERS;

  constructor(public payload: ChocolateFilters) {}
}

export type ChocolateActions = SetFilters;
