import React from 'react';
import { connect } from 'react-redux';
import Login from './component/login'

class App extends React.Component {
  render() {
    return <Login />;
  }
}

function mapStateToProps(state) {
  return {
    foo: state.get('foo')
  };
}

connect(mapStateToProps)(App);

export default App;
