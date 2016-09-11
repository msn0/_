import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const foo = this.props.foo**3;
    return <div>{foo}</div>;
  }
}

function mapStateToProps(state) {
  return {
    foo: state.get('foo')
  };
}

connect(mapStateToProps)(App);

export default App;
