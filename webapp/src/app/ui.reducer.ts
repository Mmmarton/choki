export interface State {
  isLoading: boolean;
}

const initialState = {
  isLoading: false
};

export function uiReducer(state: State = initialState, action) {
  switch (action.type) {
    case 'START_LOADING':
      return {
        isLoading: true
      };
    case 'STOP_LOADING':
      return {
        isLoading: false
      };
  }
}
