import React from 'react';
import ReactDOM from 'react-dom';
//import App.jsx
import App from './components/App';
//import provider
import { Provider } from 'react-redux';
import {createStore} from 'redux';
//import reducer
import reducer from './reducers';
import './index.css'

const store = createStore(reducer);


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root')
);
