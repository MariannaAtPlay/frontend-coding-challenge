import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AppCard from './AppCard';

const Main = props => {
	return (
		<Container>
			<Row>
				<Col sm="3">
					<AppCard />
				</Col>
				<Col sm="3">
					<AppCard />
				</Col>
				<Col sm="3">
					<AppCard />
				</Col>
				<Col sm="3">
					<AppCard />
				</Col>
				<Col sm="3">
					<AppCard />
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
