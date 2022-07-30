import React from 'react';
import { List, ListItem } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MoreOptionTask from './MoreOptionTask';
import Box from '@mui/material/Box';
import { TooltipCustomize } from '../../components/ToolTip/ToolTip';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
export default function Task(props) {
	const { task } = props;
	return (
		<ListItem className='task__item'>
			<Box sx={{display: 'flex'}}>
				<CheckCircleOutlineIcon />
				<form>
					<input type='text' value={task.task_name} />
				</form>
				<MoreOptionTask />
			</Box>

			<Box>
				<TooltipCustomize title='Assign task' placement='bottom'>
                    <PersonOutlineOutlinedIcon/>
                </TooltipCustomize>

				<TooltipCustomize title='Add due date' placement='bottom'>
                    <CalendarTodayOutlinedIcon/>
                </TooltipCustomize>
			</Box>
		</ListItem>
	);
}
