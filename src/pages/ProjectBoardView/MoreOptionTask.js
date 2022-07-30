import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TooltipCustomize } from '../../components/ToolTip/ToolTip';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function MoreOptionTask() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleOpenMore = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMore = () => {
		setAnchorEl(null);
	};

	return (
		<Box>
			<MoreHorizIcon className='btnOption__section' onClick={handleOpenMore} />
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleCloseMore}
			>
				<MenuItem className='menu__option-item'>
					<CreateOutlinedIcon className='icon__option' />
					Edit task name
				</MenuItem>

				<MenuItem className='menu__option-item'>
					<VisibilityOutlinedIcon className='icon__option' />
					View details
				</MenuItem>

				<MenuItem className='menu__option-item delete__section-task'>
					<DeleteOutlineIcon className='icon__option' />
					Delete task
				</MenuItem>
			</Menu>
		</Box>
	);
}
