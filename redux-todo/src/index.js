import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import todos from './reducers'
import App from './components/App';
import thunkMiddleware from 'redux-thunk';

const store = createStore(todos,
	applyMiddleware(thunkMiddleware)
	);

ReactDOM.render(
	<Provider store={store}>
			<App />
	</Provider>, document.getElementById('root'));

