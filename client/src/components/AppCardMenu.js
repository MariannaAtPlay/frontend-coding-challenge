import React from 'react';
import {
	UncontrolledButtonDropdown,
	DropdownMenu,
	DropdownItem,
	DropdownToggle
} from 'reactstrap';
import {
	FiTrash2,
	FiCheckCircle,
	FiEdit,
	FiEdit2,
	FiShare2
} from 'react-icons/fi';
import { GoPencil } from 'react-icons/go';

export default function AppCardMenu(props) {
	const { handleModeChange } = props;

	return (
		<UncontrolledButtonDropdown>
			<DropdownToggle
				size="sm"
				className="bg-white border-0 p-1 rounded-0"
			>
				<GoPencil size={20} color="orange" className="p-0" />
			</DropdownToggle>
			<DropdownMenu right>
				<DropdownItem
					onClick={handleModeChange}
					className="text-black-50"
				>
					<FiEdit size={20} className="mr-2" />
					Edit
				</DropdownItem>
				<DropdownItem divider />
				<DropdownItem
					onClick={handleModeChange}
					className="text-black-50"
				>
					<FiCheckCircle size={20} className="mr-2" />
					Publish
				</DropdownItem>
				<DropdownItem divider />
				<DropdownItem
					onClick={handleModeChange}
					className="text-black-50"
				>
					<FiShare2 size={20} className="mr-2" />
					Share
				</DropdownItem>
				<DropdownItem divider />
				<DropdownItem
					onClick={handleModeChange}
					className="text-black-50"
				>
					<FiTrash2 size={20} className="mr-2" />
					Delete
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledButtonDropdown>
	);
}
