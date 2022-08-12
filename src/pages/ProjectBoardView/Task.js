import React, { useState, useRef, useEffect } from 'react';
import { List, ListItem } from '@mui/material';
import MoreOptionTask from './MoreOptionTask';
import Box from '@mui/material/Box';
import { TooltipCustomize } from '../../components/ToolTip/ToolTip';
import CompleteTask from './CompleteTask';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import BoxAssignTask from './BoxAssignTask';
import BoxDueDate from './BoxDueDate';
import { useSelector, useDispatch } from 'react-redux';
import { updateTitleTaskApi } from '../../redux/actions/TaskAction';

export default function Task(props) {
	const { task } = props;
	const dispatch = useDispatch();

	const [nameTask, setnameTask] = useState(task.taskName);

	const [isDisplaySpanTaskname, setIsDisplaySpanTaskname] = useState(true);

	const inputNameTaskRef = useRef(null);
	const listItemRef = useRef(null);

	const handleTNameTaskChange = e => {
		const { value } = e.target;
		setnameTask(value);
	};

	const renameTask = async () => {
		await setIsDisplaySpanTaskname(false);
		// console.log(inputNameTaskRef.current);
		inputNameTaskRef.current.select();
	};

	const editTaskName =async () => {
		await dispatch(updateTitleTaskApi(task._id, nameTask));
		setIsDisplaySpanTaskname(true);
	};

	const handleEnter = event => {
		if (event.keyCode == 13) {
			event.target.blur();
		}
	};

	return (
		<ListItem className='task__item' ref={listItemRef}>
			<Box className='board__card-title'>
				<Box className='board__card-title--form'>
					<CompleteTask task={task} />

					{isDisplaySpanTaskname ? (
						<span
							className='task__name'
							// onClick={() => {
							// 	setIsDisplaySpanTaskname(false);
							// }}
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
							onBlur={editTaskName}
							onKeyDown={handleEnter}

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
