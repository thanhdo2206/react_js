import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const BoxHover = styled(Box)`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 6px;
	border-radius: 6px;
	:hover {
		background-color: #f9f8f8;
	}
`;

