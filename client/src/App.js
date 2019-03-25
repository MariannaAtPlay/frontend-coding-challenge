import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { IconContext } from 'react-icons';
import './App.css';

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
			</IconContext.Provider>
		);
	}
}

export default App;
