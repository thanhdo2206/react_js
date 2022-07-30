import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { BoxHover } from './BoxHover';
import { useSelector, useDispatch } from 'react-redux';
import InventoryIcon from '@mui/icons-material/Inventory';

const styles = {
	borderBox: {
		border: '1px solid #ccc',
		borderRadius: '10px',
	},

	navLink: {
		textDecoration: 'none',
		color: '#000',
	},

	divBoxProject: {
		width: '48px',
		height: '48px',
		borderRadius: '10px',
		backgroundColor: '#9ee7e3',
		marginRight: '10px',
	},

	cssArchived: {
		color: '#6d6e6f',
		fontSize: '14px',
	},
};

export default function Projects() {
	const currentWorkSpace = useSelector(
		state => state.WorkspaceReducer.currentWorkSpace
	);

	let projects = [];

	if (currentWorkSpace && currentWorkSpace.projects)
		projects = currentWorkSpace.projects;

	return (
		<Box sx={styles.borderBox}>
			<Box sx={{ padding: '20px' }}>
				<h3 style={{ margin: '0px' }}>Projects</h3>
				<Grid container spacing={2} rowSpacing={2} pt={3}>
					{projects.map((project, index) => {
						return (
							<Grid item xs={6} key={project.project_name}>
								<NavLink to='#' style={styles.navLink}>
									<BoxHover>
										<Box sx={styles.divBoxProject}></Box>
										<Box>
											<p>{project.project_name}</p>
											{project.project_status ? (
												<Box sx={{ display: 'flex', alignItems: 'center', mt: '6px' }}>
													<InventoryIcon
														color='disabled'
														sx={{ fontSize: '14px', marginRight: '5px' }}
													></InventoryIcon>
													<span style={styles.cssArchived}>Archived</span>
												</Box>
											) : (
												''
											)}
										</Box>
									</BoxHover>
								</NavLink>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Box>
	);
}
