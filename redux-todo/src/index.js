import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import todos from './reducers'
import thunkMiddleware from 'redux-thunk';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(todos,composeEnhancers(
	applyMiddleware(thunkMiddleware))
	);

ReactDOM.render(
	<Provider store={store}>
			<App />
	</Provider>, document.getElementById('root'));

