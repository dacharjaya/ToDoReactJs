import React from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

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

	activeTodo(){
		var activeTodos =  this.state.todos.filter(todo => todo.completed === false );
		return activeTodos.length;
	}

	componentDidMount(){
		this.setState({'todos': [
			{id: 1, title: "task 1", completed: true},
			{id: 2, title: "task 2", completed: false},
			{id: 3, title: "task 3", completed: false}
		]});
	}
	render() {
		var getTodos = function(){
			var path = this.props.route.path;
			var data;
			if(path === 'completed' || path === 'active'){
				var status = path === 'completed';
				data = this.state.todos.filter(todo => todo.completed === status)
			}
			else{
				data = this.state.todos
			}
			return data;
		}

		return (
			<section className="todoapp">
	        	<TodoHeader addTodo={this.addTodo.bind(this)} />
	        	<TodoList 
	        		todos={getTodos.bind(this)()} 
	        		updateTodo={this.updateTodo.bind(this)} 
	        		deleteTodo={this.deleteTodo.bind(this)} />
	        	<TodoFooter activeTodo={this.activeTodo()} />
	      	</section>
		);
	}
}

export default ToDoApp;