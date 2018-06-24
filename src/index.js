import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store";

import { CALL_API } from 'redux-api-middleware';

const initialState = {};

const fetchProjectLists = () => ({
  [CALL_API]: {
    endpoint: 'api/projects',
      method: 'GET',
      types: [
        'FETCH_PROJECTS_REQUESTS',
        'FETCH_PROJECTS_SUCCESS',
        'FETCH_PROJECTS_FAILURE',
      ]
  }
});

const store = configureStore(initialState);
store.dispatch({ type: "APP_INIT" });
store.dispatch(fetchProjectLists());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
