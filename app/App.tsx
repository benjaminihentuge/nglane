// app/App.tsx
import React, { Component } from 'react';
import Layout from './layout';
import Home from './pages';

class App extends Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

export default App;
