import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';

import reducers from './store/reducers';



const store = createStore(reducers, {}, applyMiddleware());

ReactDom.render(
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<App/>
			</Provider>
		</ThemeProvider>
	,
	document.querySelector('#app')
);