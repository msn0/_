export const ADD_FOO = 'ADD_FOO';

export function addFoo(data) {
  return {
    type: ADD_FOO,
    data
  };
}
