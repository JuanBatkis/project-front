import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Import UIkit
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';
//Import routes config
import {BrowserRouter} from 'react-router-dom'

//Use UIkit for the icons
UIkit.use(Icons);

//Declare WithRouter to use the routes
const WithRouter = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

ReactDOM.render(
	<WithRouter />,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
