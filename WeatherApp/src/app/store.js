import { createStore } from 'redux'

import rootReducer from '../reducers';

export const store = createStore(
  rootReducer,
  {Weather: {}, Error: null},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
store.subscribe(() => console.log(store.getState()))
 