import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Registration from '../pages/Registration';
import ErrorPage from '../pages/ErrorPage';
import EventsList from '../pages/EventsList';

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
	return (
	<>
		<CssBaseline/>
		<BrowserRouter>
		<>
			<Switch>
			<Route path="/" exact component={Login} />
			<Route path="/forgot-password" exact component={ForgotPassword} />
			<Route path="/registration" exact component={Registration} />
			<Route path="/events-list" exact component={EventsList} />
			<Route path="*" exact component={ErrorPage} />
			</Switch>
		</>
		</BrowserRouter>
	</>
	);
};

export default App;