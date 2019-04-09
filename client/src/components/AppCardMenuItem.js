import React from 'react';
import { DropdownItem } from 'reactstrap';

export default function AppCardMenu(props) {
	const { menuName, Icon, handleModeChange } = props;

	return (
		<DropdownItem
			onClick={(e) => handleModeChange(null, e)}
			className="text-black-50"
		>
			<Icon size={20} className="mr-2" />
			{menuName}
		</DropdownItem>
	);
}
