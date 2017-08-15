import { combineReducers } from 'redux';

import todos, * as fromToDo from './todo';
import filter from './filter';

const reducer = combineReducers({ todos, filter});

export function getFilteredTodos(state){
    return fromToDo.getFilteredTodos(state.todos, state.filter)
}

export default reducer;