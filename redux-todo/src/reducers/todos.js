const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];

		case 'RECEIVE_TODO':
			return [...action.items];

		case 'TOGGLE_TODO':
			return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo);

		default:
			return state;
	}
};

export default todos;