import React from 'react';
import { ListItemCustomize } from '../../../components/List/List';
import { Box, ListItemText, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ButtonMore from './ButtonMore';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';


const styles = {
	boxProject: {
		width: '8px',
		height: '8px',
		backgroundColor: '#aecf55',
		marginRight: '10px',
		borderRadius: '2px',
	},
	btnShowArchive: {
		fontSize: '12px',
		marginLeft: '16px',
		cursor: 'pointer',
		color: '#a2a0a2',
		'&:hover': {
			color: '#fff',
		},
	},
	navLink: {
		width: '100%',
		color: '#fff',
		textDecoration: 'none',
	},
};

export default function ArchiveProjects() {
	const [showArchiveProject, setShowArchiveProject] = useState(false);
	const currentWorkSpace = useSelector(
		state => state.WorkspaceReducer.currentWorkSpace
	);

	let projectArchives = [];

	if (currentWorkSpace && currentWorkSpace.projects) {
		projectArchives = currentWorkSpace.projects.filter(
			project => project.project_status
		);
	}

	return (
		<Box>
			<Box display={showArchiveProject ? 'block' : 'none'}>
				{projectArchives.map(project => {
					return (
						<ListItemCustomize
							key={project.project_name}
							sx={{ px: '16px' }}
							disablePadding
						>
							
								<div style={styles.boxProject}></div>
								<ListItemText
									sx={{
										'& .css-10hburv-MuiTypography-root': { fontSize: '12px' },
									}}
									primary={project.project_name}
								/>

								<ButtonMore project={project} />

								<InventoryIcon
									sx={{ fontSize: '14px', marginLeft: '5px', color: '#f5f4f3' }}
								/>
							
						</ListItemCustomize>
					);
				})}
			</Box>

			<Box mt={1}>
				<Typography
					component='span'
					sx={styles.btnShowArchive}
					onClick={() => {
						setShowArchiveProject(!showArchiveProject);
					}}
				>
					{showArchiveProject
						? 'Unshow archived projects'
						: 'Show archived projects'}
				</Typography>
			</Box>
		</Box>
	);
}
