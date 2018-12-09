import React from 'react';
import ReactDOM from 'react-dom';
import Metronome from './Metronome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Metronome />, div);
  ReactDOM.unmountComponentAtNode(div);
});
