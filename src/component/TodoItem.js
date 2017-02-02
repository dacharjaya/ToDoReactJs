import React from 'react';
import classNames from 'classnames';

class TodoItem extends React.Component {
	constructor(){
		super();

		this.state = {editing: ''};
	}

	edit(status){
		this.setState({editing: status});
	}

	editTitle(e){
		if(e.which === 13 || e.which === 9){
			this.props.todo.title = e.target.value;
			this.setState({editing: false});
		}
	}

	render() {
		let todo = this.props.todo;
		
		return (
			<li className={classNames({
				completed: this.props.todo.completed,
				editing: this.state.editing
			})}>
				<div className="view" >
                    <input 
                    	type="checkbox" 
                    	className="toggle" 
                    	value={todo.id}
                    	checked={todo.completed} 
                    	onChange={this.props.updateTodo.bind(this, todo)} />
                    <label 
                    	value={todo.id} 
                    	onDoubleClick={this.edit.bind(this, true)} >{todo.title} </label>
                    <button 
                    	className="destroy" 
                    	value={todo.id} 
                    	onClick={this.props.deleteTodo.bind(this, todo.id)}></button>
                </div>
                <input 
                    type="text" 
                    className="edit" 
                    defaultValue={todo.title} 
                    onBlur={this.editTitle.bind(this)}
                    onKeyDown={this.editTitle.bind(this)} />
			</li>
		);
	}
}

export default TodoItem;