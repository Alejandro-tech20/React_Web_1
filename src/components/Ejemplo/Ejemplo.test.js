import React from 'react';
import ReactDOM from 'react-dom';
import Ejemplo from './Ejemplo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ejemplo />, div);
  ReactDOM.unmountComponentAtNode(div);
});