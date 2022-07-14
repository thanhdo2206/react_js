import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Outlet } from 'react-router-dom';
import { Main } from './Main';
import { AppBar } from './AppBar';
import { Box } from '@mui/system';
import { Routes, Route } from 'react-router-dom';
import HomeToolbar from './Toolbar/HomeToolbar';
import MytaskToolbar from './Toolbar/MytaskToolbar';

export default function Content(props) {
	const { open, setOpen, drawerWidth } = props;

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	return (
		<Main open={open} drawerWidth={drawerWidth}>
			{/* header (toolbar) */}
			<AppBar
				position='fixed'
				open={open}
				drawerWidth={drawerWidth}
				sx={{ backgroundColor: '#fff', boxShadow: 'none', color: '#000' }}
			>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<IconButton
							onClick={handleDrawerOpen}
							sx={{ mr: 2, ...(open && { display: 'none' }) }}
						>
							<ChevronRightIcon />
						</IconButton>

						<Routes>
							<Route path='home'>
								<Route path=':id' element={<HomeToolbar />} />
							</Route>
							<Route path='my-task' element={<MytaskToolbar />} />
						</Routes>
					</Box>

					<p>Avatar</p>
				</Toolbar>
			</AppBar>

			<div style={{ marginTop: '56px' }}></div>

			{/* content */}
			<Outlet></Outlet>
		</Main>
	);
}
