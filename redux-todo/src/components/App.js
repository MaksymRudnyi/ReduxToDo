import React, {Component} from 'react'
import TodoList from '../components/TodoList'
import {fetchTodos}from '../actions/'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class App extends Component {
	constructor (props) {
		super(props)
	}

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(fetchTodos())
	}

	render () {
		return (
			<div>
				<TodoList/>
			</div>
		)
	}
}

App.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(App)