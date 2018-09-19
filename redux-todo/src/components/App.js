import React, {Component} from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
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
				<AddTodo/>
				<VisibleTodoList/>
				<Footer/>
			</div>
		)
	}
}

App.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(App)