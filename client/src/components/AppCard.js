import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
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
		const { data, handleCardUpdate } = this.props;
		const { mode } = this.state;

		//Share and Delete are not currently implemented
		if (
			mode === 'Publish' ||
			mode === 'Share' ||
			mode === 'Delete' ||
			mode === 'Loading'
		) {
			return (
				<LoadingOverlay
					active={mode === 'Loading'}
					spinner
					text="Loading..."
				>
					<AppCardPublish
						data={data}
						handleModeChange={this.handleModeChange}
					/>
				</LoadingOverlay>
			);
		} else if (mode === 'Edit') {
			return (
				<AppCardEdit
					data={data}
					handleModeChange={this.handleModeChange}
					handleCardUpdate={handleCardUpdate}
				/>
			);
		}
	}
}

export default AppCard;
