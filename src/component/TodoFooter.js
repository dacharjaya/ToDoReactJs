import React from 'react';
import {Link} from 'react-router'


class TodoFooter extends React.Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">{this.props.activeTodo} Left</span>
                
                <ul className="filters">
                    <li><Link to="/all" > All </Link></li>
                    <li><Link to="/active" > Active </Link></li>
                    <li><Link to="/completed" > Completed </Link></li>
                </ul>
            </footer>
        );
    }
}

export default TodoFooter;