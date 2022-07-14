import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Projects from './Projects';
import Members from './Members';




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
	const getDate = () => {
		let today = new Date();
		const weekday = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		let dayOfWeek = weekday[today.getDay()];
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		let curMonth = months[today.getMonth()];
		let dayOfMonth = today.getDate();

		let textToday = `${dayOfWeek}, ${curMonth} ${dayOfMonth}`;
		return textToday;
	};

	const getMess = () => {
		let day = new Date();
		let hr = day.getHours();
		let message ='';
		if (hr >= 0 && hr < 12) {
			message = 'Good Morning';
		} 
		
		if (hr >= 12 && hr <= 17) {
			message = 'Good Afternoon';
		} 
		if(hr > 17) {
			message= 'Good Evening';
		}

		return message;
	};

	

	return (
		<Box>
			<p style={styles.textDate}>{getDate()}</p>
			<p style={styles.welcomeMessenger}>{`${getMess()}, Thanh`}</p>
			<Grid container spacing={4} mt={5}>
				<Grid item xs={6}>
					<Projects></Projects>
				</Grid>

				<Grid item xs={6}>
					<Box>
						<h3 style={{ marginBottom: '10px' }}>Members</h3>
						<Divider sx={{ borderColor: '#ccc' }} />
						<Members></Members>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
