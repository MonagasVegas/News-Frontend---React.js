import { combineReducers } from 'redux';
import { RESET_ALL} from '../constants';


const appReducer = combineReducers({
  

});

const resetState = combineReducers({
    
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