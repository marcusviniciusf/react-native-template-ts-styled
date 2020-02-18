import { Reducer } from 'react';
import { TYPES } from './actions';
import { StoreInterfaces } from 'interfaces';

export const INITIAL_STATE: StoreInterfaces.StoreState = {
  theme: 'white',
};

const reducer: Reducer<StoreInterfaces.StoreState, StoreInterfaces.Action> = (
  state,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.SET_THEME:
      return { ...state, theme: payload };
    default:
      return state;
  }
};

export default reducer;
