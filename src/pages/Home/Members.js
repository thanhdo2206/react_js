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
		state => state.WorkspaceReducer.currentWorkSpace
	);

	let members = [];

	if (currentWorkSpace && currentWorkSpace.members)
		members = currentWorkSpace.members;

	return (
		<Box mt={3}>
			{members.map((member, index) => {
				return (
					<BoxHover key={member.username} mb={2}>
						<Box sx={styles.boxAvatar} borderRadius='50%'></Box>
						<Box>
							<p style={{ marginBottom: '6px' }}>{member.username}</p>
							<p style={{ color: '#ccc' }}>{member.email}</p>
						</Box>
					</BoxHover>
				);
			})}
		</Box>
	);
}
