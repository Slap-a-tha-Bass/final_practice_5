import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookDetails from './views/BookDetails';
import Books from './views/Books';
import EditDetails from './views/EditDetails';
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import Register from './views/Register';

const App = (props: AppProps) => {
	
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/books'>
					<Books />
				</Route>
				<Route exact path='/books/:id'>
					<BookDetails />
				</Route>
				<Route exact path='/edit/:id'>
					<EditDetails />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
				<Route exact path='/profile'>
					<Profile />
				</Route>
			</Switch>
		</BrowserRouter>	
	);
};

interface AppProps {}

export default App;
