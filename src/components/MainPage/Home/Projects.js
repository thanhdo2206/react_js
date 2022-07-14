import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { BoxHover } from './BoxHover';
import { useSelector, useDispatch } from 'react-redux';


const styles = {
	borderBox: { border: '1px solid #ccc', borderRadius: '10px' },

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

	cssComplete: {
		color: 'green',
	},
};

export default function Projects() {
	const currentWorkSpace = useSelector(
		state => state.AsanaReducer.currentWorkSpace
	);

	const { projects } = currentWorkSpace;
	return (
		<Box sx={styles.borderBox}>
			<Box sx={{ padding: '24px' }}>
				<h3>Projects</h3>
				<Grid container rowSpacing={2} pt={3}>
					{projects.map((project, index) => {
						return (
							<Grid item xs={6} key={project.project_name}>
								<NavLink to='#' style={styles.navLink}>
									<BoxHover>
										<Box sx={styles.divBoxProject}></Box>
										<Box>
											<p style={{ marginBottom: '6px' }}>{project.project_name}</p>
											{project.project_status === 0 ? (
												''
											) : (
												<p style={styles.cssComplete}>Complete</p>
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
