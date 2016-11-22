import React from 'react';
import ReactDOM from 'react-dom';


require('../test/index-test.js'); // Leave this in!
import { createStore } from './store';
import BandInput from './components/band_input_component';

const renderApp = () => {
  ReactDOM.render(<BandInput store={store}/>, document.getElementById('container'))
}
 
store.subscribe(renderApp);
store.dispatch({})
