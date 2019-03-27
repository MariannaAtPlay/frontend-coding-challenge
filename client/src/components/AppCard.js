import React from 'react';
import {
	Card,
	Button,
	CardImg,
	CardText,
	CardDeck,
	CardTitle,
	CardSubtitle,
	CardBody,
	CardFooter,
	Container,
	Progress
} from 'reactstrap';
import { FaDatabase } from 'react-icons/fa';
import { IoIosEye, IoMdPeople } from 'react-icons/io';

const data = {
	campaignId: 'CN201701182',
	cardTitle: 'Title5',
	cardDescription:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
	primaryMediaUrl: 'https://loremflickr.com/750/400',
	cardStartDate: '0001-01-01T00:00:00Z',
	cardEndDate: '0001-01-01T00:00:00Z',
	availableQuantity: 32,
	likes: 10,
	shares: 20,
	views: 30,
	subscribers: 0,
	unSubscribers: 0,
	open: 0,
	discard: 0,
	totalRevenue: 15000,
	listOfPlans: [
		{
			price: { amount: '15090', currency: 'CAD', currencySymbol: '$' }
		}
	],
	locations: [
		{
			latitude: '',
			longitude: '',
			area: '',
			city: '',
			country: '',
			placeId: 'ChIJx8SRZhAEGTkRwsZ7Hq_dJPs',
			description: 'Seattle, Washington, USA'
		}
	],
	currentWorkflow: 'active',
	campaignEndDate: '2017-02-28T18:59:59.999Z',
	id: 'c3d444c3d2774263ab93598fb0705374',
	userId: '5d6117b9ae114c83bb53cfdd8c722e78',
	createdAt: '2017-02-06T11:14:45.131Z',
	updatedAt: '2017-02-06T11:16:44.344Z'
};

class AppCard extends React.Component {
	render() {
		const {
			cardTitle,
			primaryMediaUrl,
			listOfPlans,
			currentWorkflow,
			totalRevenue,
			views,
			subscribers
		} = data;
		return (
			<Card className="mt-5">
				<CardImg top width="100%" src={primaryMediaUrl} />
				<CardBody className="p-3">
					<CardTitle>{cardTitle}</CardTitle>
					<CardText className="d-flex justify-content-between mb-1 text-black-50">
						<span>
							{listOfPlans[0].price.currencySymbol}{' '}
							{listOfPlans[0].price.amount} / Month
						</span>
						<span className="text-capitalize">
							{currentWorkflow}
							<div className="dot ml-2" />
						</span>
					</CardText>
					<Progress
						color="warning"
						value="100"
						style={{ height: 8 }}
						className="rounded-0"
					/>
				</CardBody>
				<CardFooter className="d-flex justify-content-between text-black-50">
					<span>
						<FaDatabase size={15} className="mr-2" />$
						{parseFloat(totalRevenue).toLocaleString()}
					</span>
					<span>
						<IoMdPeople size={25} className="mr-2" />
						{subscribers}
					</span>
					<span>
						<IoIosEye size={25} className="mr-2" />
						{views}
					</span>
				</CardFooter>
			</Card>
		);
	}
}

export default AppCard;
