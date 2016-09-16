import { Map } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_FOO':
      return setState(state, action.data);
  }
  console.log('state', state);
  return state;
}
