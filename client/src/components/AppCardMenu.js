import React, { Fragment } from 'react';
import {
	UncontrolledButtonDropdown,
	DropdownMenu,
	DropdownItem,
	DropdownToggle
} from 'reactstrap';
import { FiTrash2, FiCheckCircle, FiEdit, FiShare2 } from 'react-icons/fi';
import { GoPencil } from 'react-icons/go';
import AppCardMenuItem from './AppCardMenuItem';

export default function AppCardMenu(props) {
	const { handleModeChange } = props;
	const menu = [
		{ menuName: 'Edit', Icon: FiEdit },
		{ menuName: 'Publish', Icon: FiCheckCircle },
		{ menuName: 'Share', Icon: FiShare2 },
		{ menuName: 'Delete', Icon: FiTrash2 }
	];
	return (
		<UncontrolledButtonDropdown>
			<DropdownToggle
				size="sm"
				className="bg-white border-0 p-1 rounded-0"
			>
				<GoPencil size={20} color="orange" className="p-0" />
			</DropdownToggle>
			<DropdownMenu right>
				{menu.map(({ menuName, Icon }, index) => {
					return (
						<Fragment key={menuName}>
							<AppCardMenuItem
								menuName={menuName}
								Icon={Icon}
								handleModeChange={handleModeChange}
							/>
							{index !== menu.length - 1 ? (
								<DropdownItem divider />
							) : null}
						</Fragment>
					);
				})}
			</DropdownMenu>
		</UncontrolledButtonDropdown>
	);
}
