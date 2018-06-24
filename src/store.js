import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from './reducer';

const middlewares = [apiMiddleware];


if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const shouldLoadDevTools =
  window.devToolsExtension && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension()
    : f => f;

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    shouldLoadDevTools
  );
  return store;
}
