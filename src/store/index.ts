import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import heroesReducer from './reducers/heroesReducer';
import heroesSearchReducer from './reducers/heroesSearchReducer';

const rootReducer = combineReducers({ heroesReducer, heroesSearchReducer });

export type IRootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default store;