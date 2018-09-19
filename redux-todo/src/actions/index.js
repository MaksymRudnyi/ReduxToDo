let nextTodo = 0;

export const addTodo = text => ({
	type: 'ADD_TODO',
	id: nextTodo++,
	text
});

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
});

const receiveTodos = (todos) => {
	return {
		type: 'RECEIVE_TODO',
		items: todos.results.map(todo => {
			return {
				text: todo.name,
				id: todo['birth_year'] + todo.name,
			}
		})
	}
};

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const fetchTodos = () => {
	return function (dispatch) {
		return fetch('https://swapi.co/api/people')
			.then(response => response.json())
			.then(json => dispatch(receiveTodos(json)))
	}
};