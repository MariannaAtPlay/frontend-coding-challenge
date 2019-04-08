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
	Input,
	Form
} from 'reactstrap';
import AppCardMenu from './AppCardMenu';

class AppCardEdit extends React.Component {
	state = {
		currentWorkflow: this.props.data.currentWorkflow
	};

	handleCurrentWorkflowChange = (event) => {
		event.persist();
		//console.log(event.target.value);
		this.setState({ currentWorkflow: event.target.value });
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
				<div className="text-right p-2 card-img-overlay-fix">
					<AppCardMenu
						handleModeChange={this.props.handleModeChange}
					/>
				</div>
				<CardBody className="p-3">
					<Form>
						<CardTitle>{cardTitle}</CardTitle>
						<CardText tag="div" className=" mb-1 text-black-50">
							<div>
								{listOfPlans[0].price.currencySymbol}{' '}
								{listOfPlans[0].price.amount} / Month
							</div>
							<Input
								type="select"
								onChange={this.handleCurrentWorkflowChange}
								bsSize="sm"
								className="text-capitalize"
								value={this.state.currentWorkflow}
							>
								<option value="active">Active</option>
								<option value="terminated">Terminated</option>
								<option value="paused">Paused</option>
							</Input>
						</CardText>
					</Form>
				</CardBody>
				<CardFooter className="d-flex justify-content-between text-black-50">
					<span className="text-danger">Edit Mode</span>
				</CardFooter>
			</Card>
		);
	}
}

export default AppCardEdit;
