import { Dispatch } from 'react';
import { TYPES } from '@actions';

export type ThemeMode = 'dark' | 'white';

export interface StoreState {
  theme: ThemeMode;
}

export interface Action {
  type: TYPES;
  payload?: any;
}

export interface ActionDispatch {
  state?: StoreState;
  dispatch: Dispatch<Action>;
}

export interface StoreContext {
  state: StoreState;
  dispatch: Dispatch<Action>;
}

// Actions
export interface Actions {
  setTheme(mode: ThemeMode): void;
}
