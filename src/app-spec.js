import test from 'ava';
import React from 'react';
import App from './app';
import {shallow} from 'enzyme';

test('should render power', t => {
  const wrapper = shallow(<App foo='7'/>);
  t.is(wrapper.text(), "343");
});

test('bar', async t => {
  const bar = Promise.resolve('bar');

  t.is(await bar, 'bar');
});
