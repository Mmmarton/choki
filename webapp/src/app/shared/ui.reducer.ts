import { START_LOADING, STOP_LOADING, UIActions } from './ui.actions';

export interface State {
  isLoading: boolean;
}

const initialState = {
  isLoading: false
};

export function uiReducer(state: State = initialState, action: UIActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };
  }
}

export const getIsLoading = (state: State) => state ? state.isLoading : true;
