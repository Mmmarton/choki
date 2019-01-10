import { ChocolateActions, SET_FILTERS } from './chocolate.actions';
import { ChocolateFilters } from './chocolate.model';

export interface State {
  filters: ChocolateFilters;
}

const initialState: State = {
  filters: {
    hearts: 0,
    money: 0,
    stars: 0
  }
};

export function chocolateReducer(
  state: State = initialState,
  action: ChocolateActions
) {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload
      };
    default:
      return state;
  }
}

export const getFilters = (state: State) => state.filters;
