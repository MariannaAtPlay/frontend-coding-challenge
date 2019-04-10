import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AppCard from './AppCard';
import AppAddNewCard from './AppAddNewCard';

const AppCardList = (props) => {
	const { cards, handleCardUpdate } = props;
	const cardCols = cards.map((card, index) => {
		//using index for the key, because card.id is not unique
		return (
			<Col sm="3" key={index}>
				<AppCard data={card} handleCardUpdate={handleCardUpdate} />
			</Col>
		);
	});

	return (
		<Container>
			<Row>
				{cardCols}
				<Col sm="3" key="newCard">
					<AppAddNewCard />
				</Col>
			</Row>
		</Container>
	);
};

export default AppCardList;
