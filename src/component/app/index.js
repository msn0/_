import React from 'react';
import {connect} from 'react-redux';
import Login from '../login';
import styles from './styles.less';

class App extends React.Component {
  render() {
    return (
      <div className={styles['container']}>
        <Login />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foo: state.get('foo')
  };
}

connect(mapStateToProps)(App);

export default App;
