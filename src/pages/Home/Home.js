import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Projects from './Projects';
import Members from './Members';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentWorkspaceAction } from '../../redux/actions/WorkspaceAction';
import Axios from 'axios';
import { getDate } from '../../utils/date';

const styles = {
	textDate: {
		textAlign: 'center',
		fontSize: '20px',
		marginBottom: '20px',
	},
	welcomeMessenger: {
		textAlign: 'center',
		fontSize: '34px',
	},
};

export default function Home() {
	const dispatch = useDispatch();
	const { workspaceId } = useParams();

	useEffect(() => {
		async function fetchData() {
			if (workspaceId) {
				// try {

				// 	const {data} = await Axios.get(`https://projectasana.herokuapp.com/api/ws/${workspaceId}`)
				// 	console.log(data);
				// 	dispatch(setCurrentWorkspaceAction(data));
				// } catch (error) {
				// 	console.log(error);
				// }
				
				dispatch(setCurrentWorkspaceAction(workspaceId));
			}
		}

		fetchData();
	}, []);

	const getGreetingMessage = () => {
		let day = new Date();
		let hr = day.getHours();

		if (hr >= 0 && hr < 12) return 'Good Morning';

		if (hr >= 12 && hr <= 17) return 'Good Afternoon';

		if (hr > 17) return 'Good Evening';
	};

	return (
		<Box sx={{ padding: '24px' }}>
			<p style={styles.textDate}>{getDate()}</p>
			<p style={styles.welcomeMessenger}>{`${getGreetingMessage()}, Thanh`}</p>
			<Grid container spacing={4} mt={5}>
				<Grid item xs={6}>
					<Projects />
				</Grid>

				<Grid item xs={6}>
					<Box>
						<h3 style={{ marginBottom: '10px' }}>Members</h3>
						<Divider sx={{ borderColor: '#ccc' }} />
						<Members />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
