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
import AppCardPublish from './AppCardPublish';
import AppCardEdit from './AppCardEdit';

class AppCard extends React.Component {
	state = {
		mode: 'Publish'
	};

	handleModeChange = (mode, event) => {
		//when event is not passed, use mode as a string
		if (event) {
			event.persist();
			this.setState({ mode: event.target.innerText });
		} else {
			this.setState({ mode });
		}
	};

	render() {
		const { data } = this.props;
		const { mode } = this.state;

		//Share and Delete are not currently implemented
		if (mode === 'Publish' || mode === 'Share' || mode === 'Delete') {
			return (
				<AppCardPublish
					data={data}
					handleModeChange={this.handleModeChange}
				/>
			);
		} else if (mode === 'Edit') {
			return (
				<AppCardEdit
					data={data}
					handleModeChange={this.handleModeChange}
				/>
			);
		}
	}
}

export default AppCard;
