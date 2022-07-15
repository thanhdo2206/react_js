import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import { NavLink } from 'react-router-dom';
import { DrawerHeader } from '../../components/DrawerHeader/DrawerHeader';
import { ListItemCustomize } from '../../components/List/List';
import { ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

const styles = {
	navLink: {
		width: '100%',
		color: '#fff',
		textDecoration: 'none',
	},

	iconButton: {
		color: '#a2a0a2',
		fontSize: '20px',
	},
	boxProject: {
		width: '8px',
		height: '8px',
		backgroundColor: '#aecf55',
		marginRight: '10px',
		borderRadius: '2px',
	},
	iconBtnClose: {
		color: '#fff',
		'&:hover': {
			backgroundColor: 'rgb(186 179 179 / 40%)',
		},
	},
	btnCreateProject: {
		fontSize: '12px',
		padding: '6px',
		fontWeight: 'bold',
		marginLeft: '16px',
		borderRadius: '4px',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.08)',
		},
	},
};

export default function SideBar(props) {
	const currentWorkSpace = useSelector(
		state => state.AsanaReducer.currentWorkSpace
	);

	const { open, setOpen, drawerWidth } = props;

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const arrList = [
		{
			title: 'Home',
			href: `/main-page/home/${currentWorkSpace.workspace_id}`,
			tagIcon: <HomeOutlinedIcon sx={styles.iconButton}></HomeOutlinedIcon>,
		},
		{
			title: 'My task',
			href: '/main-page/my-task',
			tagIcon: (
				<CheckCircleOutlineOutlinedIcon
					sx={styles.iconButton}
				></CheckCircleOutlineOutlinedIcon>
			),
		},
		{
			title: 'Reporting',
			href: '#',
			tagIcon: <OutlinedFlagIcon sx={styles.iconButton}></OutlinedFlagIcon>,
		},
	];

	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const location = useLocation();

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	window.onload = event => {
		const index = arrList.findIndex(item => item.href === location.pathname);
		setSelectedIndex(index);
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

			<List>
				{arrList.map((item, index) => {
					return (
						<ListItemCustomize
							key={item.title}
							disablePadding
							selected={selectedIndex === index}
							onClick={event => handleListItemClick(event, index)}
						>
							<NavLink to={item.href} style={styles.navLink}>
								<ListItemButton>
									<ListItemIcon sx={{ minWidth: '28px' }}>{item.tagIcon}</ListItemIcon>
									<ListItemText primary={item.title} />
								</ListItemButton>
							</NavLink>
						</ListItemCustomize>
					);
				})}
			</List>

			<Divider sx={{ borderColor: '#f5f4f361' }} />

			<List>
				<p style={{ padding: '8px 16px' }}>{currentWorkSpace.workspace_name}</p>
				{currentWorkSpace.projects.map((project, index) => (
					<ListItemCustomize key={project.project_name} disablePadding>
						<ListItemButton>
							<div style={styles.boxProject}></div>
							<ListItemText
								sx={{
									'& .css-10hburv-MuiTypography-root': { fontSize: '12px' },
								}}
								primary={project.project_name}
							/>
						</ListItemButton>
					</ListItemCustomize>
				))}
			</List>

			<NavLink to="/new-project" style={styles.navLink}>
				<Box>
					<Typography component='span' sx={styles.btnCreateProject}>
						+ Create a Project
					</Typography>
				</Box>
			</NavLink>
		</Drawer>
	);
}
