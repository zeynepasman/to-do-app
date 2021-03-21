import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [thunk];

const bindMiddleware = (middleware: ThunkMiddleware<{}, AnyAction, undefined>[]) => {

  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware(middlewares));
export { store };
