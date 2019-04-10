import React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import { IoIosAddCircle } from 'react-icons/io';

const AppAddNewCard = () => {
	return (
		<Card className="mt-5 rounded h-100" style={{ borderStyle: 'dotted' }}>
			<CardBody className="p-3 text-black-50 d-flex flex-column align-items-center justify-content-center">
				<IoIosAddCircle size={50} className="m-3" />
				<CardText>Create A Service Card</CardText>
			</CardBody>
		</Card>
	);
};

export default AppAddNewCard;
