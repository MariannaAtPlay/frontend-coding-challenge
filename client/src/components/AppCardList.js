import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AppCard from './AppCard';

const Main = (props) => {
	const { cards } = props;
	const cardCols = cards.map((card, index) => {
		//temporarily using index for the key, because card.id is not unique
		return (
			<Col sm="3" key={index}>
				<AppCard data={card} />
			</Col>
		);
	});

	return (
		<Container>
			<Row>{cardCols}</Row>
		</Container>
	);
};

export default Main;
