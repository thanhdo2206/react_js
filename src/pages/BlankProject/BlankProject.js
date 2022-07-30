import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createProjectAction } from '../../redux/actions/WorkspaceAction';

const PROJECT_NAME_REQUIRED = 'Project name is required.';

const styles = {
	cssImg: {
		width: '90%',
		border: '2px solid #ccc',
		borderRadius: '10px',
	},
	cssTextField: {
		marginTop: '10px',
		'& input': {
			paddingTop: '8px',
		},
		'& #projectName-helper-text': {
			marginLeft: '0px',
		},
	},
};

export default function BlankProject() {
	const navigate = useNavigate();
	const [projectName, setProjectName] = useState('');
	const [errorRequired, setErrorRequired] = useState('');
	const dispatch = useDispatch();
	const currentWorkSpace = useSelector(
		state => state.WorkspaceReducer.currentWorkSpace
	);

	// console.log(currentWorkSpace);
	const handleSubmit = event => {
		event.preventDefault();
		if (!projectName.trim()) {
			setErrorRequired(PROJECT_NAME_REQUIRED);
			return;
		}

		dispatchProject(projectName);
	};

	const dispatchProject =  projectName => {
		
			navigate(-1);
			dispatch(createProjectAction(projectName));
			// navigate(`/main-page/home/${currentWorkSpace.workspace_id}`);
			
		
	};

	const getValue = event => {
		const {value } = event.target;
		setProjectName(value);
		
	};

	return (
		<Box p={3}>
			<IconButton
				onClick={() => {
					navigate(-1);
				}}
			>
				<ArrowBackIcon></ArrowBackIcon>
			</IconButton>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Box p={3}>
						<Typography component='p' sx={{ fontSize: '30px' }}>
							New Project
						</Typography>
						<form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
							<label style={{ fontSize: '14px', color: '#6d6e6f' }}>
								Project Name
							</label>
							<TextField
								id='projectName'
								fullWidth
								sx={styles.cssTextField}
								variant='filled'
								error={errorRequired !== ''}
								helperText={errorRequired}
								autoFocus
								onChange={getValue}
							/>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
							>
								Create New Project
							</Button>
						</form>
					</Box>
				</Grid>
				<Grid item xs={8}>
					<img src='./img/imgProject.png' alt='list' style={styles.cssImg} />
				</Grid>
			</Grid>
		</Box>
	);
}
