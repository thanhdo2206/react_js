import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {  useDispatch } from 'react-redux';
import { archiveProjectAction } from '../../../redux/actions/WorkspaceAction';

const styles = {
	cssMenuItem: {
		fontSize: '12px',
	},
	btnMore: {
		fontSize: '16px',
		color: '#a2a0a2',
		cursor: 'pointer',
		'&:hover': {
			color: '#ffff',
		},
	},
};

export default function ButtonMore(props) {
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const open = Boolean(anchorEl);

	const { project } = props;
	const checkArchive = project.project_status;

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleArchive = (status, projectId) => {
		handleClose();
		dispatch(archiveProjectAction(status, projectId));
	};

	return (
		<div>
			<MoreHorizIcon onClick={handleClick} sx={styles.btnMore} />

			<Menu id='basic-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
				{checkArchive ? (
					<MenuItem
						sx={styles.cssMenuItem}
						onClick={() => {
							handleArchive(0, project.project_id);
						}}
					>
						Unarchive Project
					</MenuItem>
				) : (
					<MenuItem
						sx={styles.cssMenuItem}
						onClick={() => {
							handleArchive(1, project.project_id);
						}}
					>
						Archive Project
					</MenuItem>
				)}
			</Menu>
		</div>
	);
}
