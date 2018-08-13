import React from 'react'
import {connect} from 'react-redux'
import {toggleTodo} from '../actions';
import Todo from './Todo'

const TodoList = ({todos, toggleTodo}) => (
	<ul>
		{todos.map(todo =>
			<Todo onClick={() => toggleTodo(todo.id)} {...todo} key={todo.id}/>
		)}
	</ul>
);

const mapStateToProps = state => ({
	todos: state
});

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)