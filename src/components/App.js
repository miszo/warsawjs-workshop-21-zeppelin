import React, { Component } from 'react';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider {...this.props}>
        <h1>TADAAA!!!</h1>
      </Provider>

    );
  }
}

export default App;
