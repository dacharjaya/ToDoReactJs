import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
	render() {
		let todoItem = this.props.todos.map(todo => {
			return <TodoItem key={todo.title} 
							todo={todo} 
							updateTodo={this.props.updateTodo} 
							deleteTodo={this.props.deleteTodo} />
		});
		
		return (
			<section className="main">
        		<ul className="todo-list">
        			{todoItem}
        		</ul>
        	</section>
		);
	}
};

export default TodoList;