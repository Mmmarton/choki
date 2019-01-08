import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromUi from './shared/ui.reducer';
import * as fromChocolate from './chocolate/chocolate.reducer';

const STORE_KEYS_TO_PERSIST = ['ui', 'chocolate'];

export interface State {
  ui: fromUi.State;
  chocolate: fromChocolate.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducer,
  chocolate: fromChocolate.chocolateReducer
};

export function localStorageSyncReducer(
  reducer: ActionReducer<State>
): ActionReducer<State> {
  return localStorageSync({
    keys: STORE_KEYS_TO_PERSIST,
    rehydrate: true
  })(reducer);
}

export const metaReducers: Array<MetaReducer<State, Action>> = [
  localStorageSyncReducer
];

export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getIsLoading = createSelector(
  getUiState,
  fromUi.getIsLoading
);

export const getChocolateState = createFeatureSelector<fromChocolate.State>(
  'chocolate'
);
export const getSecret = createSelector(
  getChocolateState,
  fromChocolate.getSecret
);
