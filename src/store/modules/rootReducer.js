import { combineReducers } from 'redux';

import saidas from './saidas/reducer';
import entradas from './entradas/reducer';

export default combineReducers({
  saidas,
  entradas,
});
