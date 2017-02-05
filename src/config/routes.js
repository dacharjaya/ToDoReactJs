import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import ToDoApp from './../component/TodoComponent';

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={ToDoApp}>
			<IndexRoute component={ToDoApp} />
        	<Route path="all" component={ToDoApp} />
		</Route>
		<Route path="active" component={ToDoApp} />
       	<Route path="completed" component={ToDoApp} />
	</Router>
);
export default routes;