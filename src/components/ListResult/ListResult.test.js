import React from 'react';
import ReactDOM from 'react-dom';
import ListResult from './ListResult';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListResult />, div);
  ReactDOM.unmountComponentAtNode(div);
});