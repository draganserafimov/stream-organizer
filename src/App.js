import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Authentication from './containers/Authentication/Authentication';

class App extends Component {
  render() {
    return (
      <Layout>
        <Authentication></Authentication>
      </Layout>
    );
  }
}

export default App;
