import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';

export default function BasicMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const open = Boolean(anchorEl);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

    const handleArchive = () => {

        handleClose();
    }

	return (
		<div>
			<IconButton
				id='basic-button'
				// aria-controls={open ? 'basic-menu' : undefined}
				// aria-haspopup='true'
				// aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<MoreHorizIcon />
			</IconButton>

			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				// MenuListProps={{
				// 	'aria-labelledby': 'basic-button',
				// }}
			>
				<MenuItem onClick={handleArchive}>Archive Project</MenuItem>
				<MenuItem onClick={handleClose}>Unarchive Project</MenuItem>
			</Menu>
		</div>
	);
}
