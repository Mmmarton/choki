import { ChocolateActions, SET_SECRET } from './chocolate.actions';

export interface State {
  secret: string;
}

const initialState: State = {
  secret: ''
};

export function chocolateReducer(
  state: State = initialState,
  action: ChocolateActions
) {
  switch (action.type) {
    case SET_SECRET:
      return {
        ...state,
        secret: action.payload
      };
    default:
      return state;
  }
}

export const getSecret = (state: State) => (state ? state.secret : '');
