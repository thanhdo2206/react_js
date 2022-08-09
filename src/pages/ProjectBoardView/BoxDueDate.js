import { Box, ClickAwayListener, Typography } from '@mui/material';
import React, { useState } from 'react';
import { TooltipCustomize } from '../../components/ToolTip/ToolTip';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DueDateForm from '../../components/duedate/DueDateForm';
import { showDate } from '../../utils/date';

export default function BoxDueDate(props) {
	const { task } = props;

	const { startDate, dueDate } = task;
	const valueStartDate = startDate !== null ? startDate : '';
	const valueDueDate = dueDate !== null ? dueDate : '';

	const [isOpenDueDate, setOpenDueDate] = useState(false);

	const handleOpenDueDate = () => {
		setOpenDueDate(true);
	};

	const handleClickAwayDueDate = () => {
        
		setOpenDueDate(false);
	};

	return (
		<ClickAwayListener onClickAway={handleClickAwayDueDate}>
			<Box sx={{ position: 'relative' }}>
				<Box onClick={handleOpenDueDate}>
					<TooltipCustomize title='Add due date' placement='bottom'>
						<Box sx={{ display: 'flex' }}>
							{valueStartDate || valueDueDate ? (
								<Typography className='dueDate__value'>
									{showDate(startDate, dueDate)}
								</Typography>
							) : (
								<CalendarTodayOutlinedIcon className='icon__assign__date' />
							)}
						</Box>
					</TooltipCustomize>
				</Box>

				<Box className='dueDate__board'>
					<DueDateForm
						dropDueDate={isOpenDueDate}
						startDate={valueStartDate}
						dueDate={valueDueDate}
                        task={task}
                        handleClickAwayDueDate={handleClickAwayDueDate}
					/>
				</Box>
			</Box>
		</ClickAwayListener>
	);
}
