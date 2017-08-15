import { SET_FILTER , setFilter } from '../actions/filter';

function reducer(state = "ALL", action) {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default reducer;