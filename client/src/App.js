import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { IconContext } from 'react-icons';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Main from './components/Main';

class App extends Component {
	render() {
		return (
			<IconContext.Provider
				value={{
					size: 32,
					style: { verticalAlign: 'middle' }
				}}
			>
				<AppNavbar />
				<Main />
			</IconContext.Provider>
		);
	}
}

export default App;
