import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Registration from './pages/Registration';
import ErrorPage from './pages/ErrorPage';

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
	return (
	<>
		<CssBaseline/>
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/forgot-password" element={<ForgotPassword />} />
				<Route exact path="/registration" element={<Registration />} />
				<Route exact path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	</>
	);
};

export default App;