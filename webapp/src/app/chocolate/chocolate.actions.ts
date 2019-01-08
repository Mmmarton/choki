import { Action } from '@ngrx/store';

export const SET_SECRET = '[CHOCOLATE] set the secret';

export class SetSecret implements Action {
  readonly type = SET_SECRET;

  constructor(public payload: string) {}
}

export type ChocolateActions = SetSecret;
