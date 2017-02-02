import React from 'react';
import HeaderComponent from './HeaderComponent';
import TodoList from './TodoList';

import './../../node_modules/todomvc-app-css/index.css';

class ToDoApp extends React.Component {
	constructor(){
		super();

		this.state = {'todos': []};
		
	}

	updateTodo(updatedTodo) {
		var todos = this.state.todos;
		todos = todos.map(todo => {
			if(todo !== updatedTodo){
				return todo;
			} else{
				todo.completed = !todo.completed
				return todo;
			}
		});
		this.setState({'todos': todos});
	}

	deleteTodo(id) {
		var todos = this.state.todos;
		var index = todos.findIndex(todo => todo.id === id);
		
		todos.splice(index,1);
		this.setState({'todos': todos});
	}

	addTodo(e){
		if(e.which === 13){
			var todos = this.state.todos;
			var newTodo = {
				id: todos[todos.length -1].id +1,
				title: e.target.value,
				comleted: false
			}
			e.target.value = '';
			todos.push(newTodo);
			this.setState({'todos': todos});
		}
		
	}

	componentDidMount(){
		this.setState({'todos': [
			{id: 1, title: "task 1", completed: true},
			{id: 2, title: "task 2", completed: false},
			{id: 3, title: "task 3", completed: false}
		]});
	}
	render() {
		return (
			<section className="todoapp">
	        	<HeaderComponent addTodo={this.addTodo.bind(this)} />
	        	<TodoList 
	        		todos={this.state.todos} 
	        		updateTodo={this.updateTodo.bind(this)} 
	        		deleteTodo={this.deleteTodo.bind(this)} />
	      	</section>
		);
	}
}

export default ToDoApp;