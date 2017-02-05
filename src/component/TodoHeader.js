import React from 'react';

class TodoHeader extends React.Component {
	render() {
		return (
			<header className="header">
	        	<h1>ToDo </h1>
	        	<input 
		            type="text" 
		            name="newTodo" 
		            className="new-todo" 
		            placeholder="Enter to add new task" 
		            autoFocus 
		            ref="newTodo"
		            onKeyDown={this.props.addTodo.bind(this)} />     
	      	</header>
		);
	}
}

export default TodoHeader;