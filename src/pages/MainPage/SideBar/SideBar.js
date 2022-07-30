import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { NavLink } from 'react-router-dom';
import { DrawerHeader } from '../../../components/DrawerHeader/DrawerHeader';
import IconButton from '@mui/material/IconButton';
import UnarchiveProjects from './UnarchiveProjects';
import ListOption from './ListOption';
import { List, ListItemText, Tooltip } from '@mui/material';
import { ListItemCustomize } from '../../../components/List/List';
import { useSelector } from 'react-redux';
import ArchiveProjects from './ArchiveProjects';
import './SideBar.css'

const styles = {
	iconBtnClose: {
		color: '#fff',
		'&:hover': {
			backgroundColor: 'rgb(186 179 179 / 40%)',
		},
	},
	btnCreateProject: {
		fontSize: '20px',
		color: '#a2a0a2',
		cursor: 'pointer',
		'&:hover': {
			color: '#ffff',
		},
	},
	navLink: {
		color: '#fff',
		textDecoration: 'none',
	},
};

export default function SideBar(props) {
	const currentWorkSpace = useSelector(
		state => state.WorkspaceReducer.currentWorkSpace
	);

	const { open, setOpen, drawerWidth } = props;

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,

				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
					backgroundColor: '#1e1f21',
					color: '#ffff',
				},
			}}
			variant='persistent'
			anchor='left'
			open={open}
		>
			<DrawerHeader>
				<Box
					component='img'
					sx={{
						maxWidth: '80px',
						float: 'left',
						flex: 1,
					}}
					alt='Logo'
					src='https://d3ki9tyy5l5ruj.cloudfront.net/obj/6622ad572b5223bcb1ad696eae8f988e5dd04631/Asana-Logo-Horizontal-Coral-White.svg'
				/>
				<IconButton sx={styles.iconBtnClose} onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</DrawerHeader>

			<ListOption />

			<Divider sx={{ borderColor: '#f5f4f361' }} />

			{/* list project */}
			<List>
				<ListItemCustomize>
					<ListItemText primary={currentWorkSpace.workspace_name} />

					<Tooltip title='Create a project' placement='right'>
						<NavLink to='/new-project' style={styles.navLink}>
							<Box component='span' sx={styles.btnCreateProject}>
								+
							</Box>
						</NavLink>
					</Tooltip>
				</ListItemCustomize>

				<UnarchiveProjects />

				<ArchiveProjects />
			</List>

			
		</Drawer>
	);
}
