import React from 'react';
import { ListItemCustomize } from '../../../components/List/List';
import { ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import ButtonMore from './ButtonMore';
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
	
};

export default function UnarchiveProjects() {
	const currentWorkSpace = useSelector(
		state => state.WorkspaceReducer.currentWorkSpace
	);

	let projectUnarchives = [];

	if (currentWorkSpace && currentWorkSpace.projects) {
		projectUnarchives = currentWorkSpace.projects.filter(
			project => !project.project_status
		);
	}

	return (
		<div>
			{projectUnarchives.map(project => {
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
						
					</ListItemCustomize>
				);
			})}
		</div>
	);
}
