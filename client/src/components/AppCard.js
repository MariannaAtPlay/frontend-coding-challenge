import React from 'react';
import {
	Card,
	Button,
	CardImg,
	CardImgOverlay,
	CardText,
	CardDeck,
	CardTitle,
	CardSubtitle,
	CardBody,
	CardFooter,
	Container,
	Progress,
	Input
} from 'reactstrap';
import { FaDatabase } from 'react-icons/fa';
import { IoIosEye, IoMdPeople } from 'react-icons/io';
import AppCardMenu from './AppCardMenu';

class AppCard extends React.Component {
	state = {
		mode: 'Publish'
	};

	handleModeChange = (event) => {
		event.persist();
		this.setState({ mode: event.target.innerText });
	};

	render() {
		const {
			cardTitle,
			primaryMediaUrl,
			listOfPlans,
			currentWorkflow,
			totalRevenue,
			views,
			subscribers
		} = this.props.data;

		return (
			<Card className="mt-5 rounded">
				<CardImg top width="100%" src={primaryMediaUrl} />
				<CardImgOverlay className="text-right p-2">
					<AppCardMenu handleModeChange={this.handleModeChange} />
				</CardImgOverlay>
				<CardBody className="p-3">
					<CardTitle>{cardTitle}</CardTitle>
					<CardText className="d-flex justify-content-between mb-1 text-black-50">
						<span>
							{listOfPlans[0].price.currencySymbol}{' '}
							{listOfPlans[0].price.amount} / Month
						</span>
						{/* <Input
							type="select"
							bsSize="sm"
							className="text-capitalize"
							value={currentWorkflow}
						>
							<option value="active">Active</option>
							<option value="terminated">Terminated</option>
						</Input> */}
						<span className="text-capitalize">
							{currentWorkflow}
							<span className={`${currentWorkflow}Dot ml-2`} />
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
