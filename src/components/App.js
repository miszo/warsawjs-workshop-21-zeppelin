import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ProjectsList from './ProjectsList';

class App extends Component {
  render() {
    return (
      <Provider {...this.props}>
        <ProjectsList/>
      </Provider>

    );
  }
}

export default App;
