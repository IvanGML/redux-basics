import { createStore } from 'redux';

import state from './state';
import reducer from '../reducers';

const store = createStore(reducer, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;