import { combineReducers } from 'redux';
import { RESET_ALL} from '../constants';

import { newsReducer } from './_reducerNews';



const appReducer = combineReducers({
    newsReducer,

});

const resetState = combineReducers({
    newsReducer,
});



const rootReducer = (state, action) => {
    if (action.type === RESET_ALL) {
        state = undefined
        return resetState(state, action)
    } else {
        return appReducer(state, action)
    }
}

export default rootReducer;