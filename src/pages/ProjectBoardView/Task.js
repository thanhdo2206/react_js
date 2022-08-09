import React, { useState, useRef } from 'react';
import { List, ListItem } from '@mui/material';
import MoreOptionTask from './MoreOptionTask';
import Box from '@mui/material/Box';
import { TooltipCustomize } from '../../components/ToolTip/ToolTip';
import CompleteTask from './CompleteTask';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import BoxAssignTask from './BoxAssignTask';
import BoxDueDate from './BoxDueDate';

export default function Task(props) {
	const { task } = props;

	const [nameTask, setnameTask] = useState(task.taskName);

	const [isDisplaySpanTaskname, setIsDisplaySpanTaskname] = useState(true);

	const inputNameTaskRef = useRef(null);
	const listItemRef = useRef(null);

	const handleTNameTaskChange = e => {
		const { value } = e.target;
		setnameTask(value);
	};

	const renameTask = () => {
		inputNameTaskRef.current.click();
	};

	return (
		<ListItem className='task__item' ref={listItemRef}>
			<Box className='board__card-title'>
				<Box className='board__card-title--form'>
					<CompleteTask task={task} />

					{isDisplaySpanTaskname ? (
						<span
							className='task__name'
							onClick={() => {
								setIsDisplaySpanTaskname(false);
							}}
						>
							{task.taskName}
						</span>
					) : (
						<TextareaAutosize
							maxRows={5}
							className='task__name-input'
							type='text'
							placeholder='Write a task name'
							ref={inputNameTaskRef}
							value={nameTask}
							onChange={handleTNameTaskChange}
							onClick={e => {
								e.target.select();
							}}
						/>
					)}
				</Box>

				<MoreOptionTask renameTask={renameTask} />
			</Box>

			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<BoxAssignTask task={task} />

				<BoxDueDate task={task} />
			</Box>
		</ListItem>
	);
}
