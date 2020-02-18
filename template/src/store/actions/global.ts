import { StoreInterfaces } from 'interfaces';
import { TYPES } from './types';

export default ({
  dispatch,
}: StoreInterfaces.ActionDispatch): StoreInterfaces.Actions => ({
  setTheme: mode => {
    dispatch({
      type: TYPES.SET_THEME,
      payload: mode,
    });
  },
});
