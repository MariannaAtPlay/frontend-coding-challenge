import React from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardTitle,
	CardBody,
	CardFooter,
	Input,
	Form
} from 'reactstrap';
import AppCardMenu from './AppCardMenu';
import * as API from '../utils/api';

class AppCardEdit extends React.Component {
	state = {
		currentWorkflow: this.props.data.currentWorkflow
	};

	//possible card states based on the currentWorkflow
	currentWorkflowOptions = {
		saved: ['pending'],
		pending: ['active', 'declined'],
		active: ['paused', 'expired', 'terminated'],
		paused: ['active'],
		expired: null,
		declined: null,
		terminated: null
	};

	handleCurrentWorkflowChange = (event) => {
		event.persist();
		this.setState({ currentWorkflow: event.target.value });
	};

	handleSubmit = (event) => {
		const card = this.props.data;
		const newWorkflow = this.state.currentWorkflow;
		event.preventDefault();
		//show loading
		this.props.handleModeChange('Loading', null);
		//API call updateCard then hide loading
		API.updateCard(card, newWorkflow)
			//update state
			.then((card) => {
				this.props.handleCardUpdate(card, newWorkflow);
				this.props.handleModeChange('Publish', null);
			});
	};

	render() {
		const { cardTitle, primaryMediaUrl, listOfPlans } = this.props.data;
		const { currentWorkflow } = this.state;
		const optionsArray = this.currentWorkflowOptions[currentWorkflow];

		return (
			<Card className="mt-5 rounded">
				<CardImg top width="100%" src={primaryMediaUrl} />
				{/* this div with a custom CSS class is used instead of <CardImgOverlay>
				to work around a currently open reactstrap issue with this 
				component that affects the form 
				see https://github.com/reactstrap/reactstrap/issues/1277 */}
				<div className="text-right p-2 card-img-overlay-fix">
					<AppCardMenu
						handleModeChange={this.props.handleModeChange}
					/>
				</div>
				<Form onSubmit={this.handleSubmit}>
					<CardBody className="p-3">
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
								value={currentWorkflow}
							>
								<option
									value={currentWorkflow}
									key={currentWorkflow}
								>
									{currentWorkflow}
								</option>
								{optionsArray &&
									optionsArray.map((state) => {
										return (
											<option value={state} key={state}>
												{state}
											</option>
										);
									})}
							</Input>
						</CardText>
					</CardBody>
					<CardFooter className="d-flex justify-content-between text-black-50">
						<span className="text-danger">Edit Mode</span>
						<input
							type="submit"
							value="Submit"
							className="text-black-50 border-0 bg-light"
						/>
					</CardFooter>
				</Form>
			</Card>
		);
	}
}

export default AppCardEdit;
