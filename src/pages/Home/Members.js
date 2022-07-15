import React from 'react';
import Box from '@mui/material/Box';
import { BoxHover } from './BoxHover';
import { useSelector, useDispatch } from 'react-redux';

const styles = {
	boxAvatar: {
		width: '40px',
		height: '40px',
		borderRadius: '50%',
		backgroundColor: 'orange',
		marginRight: '10px',
	},
};

export default function Members() {
	const currentWorkSpace = useSelector(
		state => state.AsanaReducer.currentWorkSpace
	);

	const { members } = currentWorkSpace;
	return (
		<Box mt={3}>
			{members.map((member, index) => {
				return (
					<BoxHover key={member.userName} mb={2}>
						<Box sx={styles.boxAvatar} borderRadius='50%'></Box>
						<Box>
							<p style={{ marginBottom: '6px' }}>{member.userName}</p>
							<p style={{ color: '#ccc' }}>{member.gmail}</p>
						</Box>
					</BoxHover>
				);
			})}
		</Box>
	);
}
