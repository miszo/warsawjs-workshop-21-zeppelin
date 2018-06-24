import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProjectsListView from '../views/ProjectsListView';
import ProjectView from '../views/ProjectView';

class App extends Component {
  render() {
    return (
      <Provider {...this.props}>
        <Router>
          <div>
            <Route exact path="/" component={ProjectsListView}/>
            <Route path="/projects/:projectId" component={ProjectView}/>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;
