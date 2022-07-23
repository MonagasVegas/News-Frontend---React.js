import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import reducers from '../Reducers'

const Store = createStore(
    reducers,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default Store;