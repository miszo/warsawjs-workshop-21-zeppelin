import { combineReducers } from 'redux';

const isAppLoading = (state = false, action) => {
  const actionState = {
    'APP_INIT': true,
    'default': state
  };
  return actionState[action.type] || actionState['default'];
};

const projects = (
  state = { loading: false, data: [] },
  action
) => {
  const actionState = {
    'FETCH_PROJECTS_FAILURE': {
      ...state,
      loading: false
    },
    'FETCH_PROJECTS_SUCCESS': {
      data: action.payload ,
      loading: false
    },
    'default': state
  };
  return actionState[action.type] || actionState['default'];
};

export default combineReducers({
  projects,
  isAppLoading
});
