
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import DogApp from './components/dog-app/dog-app';
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><DogApp /></Provider>, document.getElementById('root'));
