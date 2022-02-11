import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import heroesReducer from './reducers/heroesReducer';

const rootReducer = combineReducers({ heroesReducer });

export type IRootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default store;