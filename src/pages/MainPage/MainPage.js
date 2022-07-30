import React from 'react';
import SideBar from './SideBar/SideBar';
import Content from './Content';
import Box from '@mui/material/Box';

const drawerWidth = 240;

export default function MainPage() {
	const [open, setOpen] = React.useState(true);

	return (
		<Box sx={{ display: 'flex' }}>
			<SideBar drawerWidth={drawerWidth} setOpen={setOpen} open={open}></SideBar>

			<Content drawerWidth={drawerWidth} setOpen={setOpen} open={open}></Content>
		</Box>
	);
}
