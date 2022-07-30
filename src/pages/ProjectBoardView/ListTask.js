import React from 'react';
import { List, ListItem } from '@mui/material';
import Box from '@mui/material/Box';
import { mapOrder } from '../../utils/sort';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from '../../utils/dragDrop';
import { updateDropTask } from '../../redux/actions/ProjectAction';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';

export default function ListTask(props) {
	const dispatch = useDispatch();

	const { section } = props;

	const listTask = mapOrder(section.tasks, section.taskOrder, 'task_id');

	const renderListTask = () => {
		return listTask.map((task, index) => {
			return (
				<Draggable key={task.task_name}>
					<Task task={task} />
				</Draggable>
			);
		});
	};

	const onTaskDrop = (dropResult, section) => {
		const { removedIndex, addedIndex, payload } = dropResult;
		if (removedIndex !== null || addedIndex !== null) {
			let newTasks = applyDrag(section.tasks, dropResult);

			let newTaskOrder = newTasks.map(task => task.task_id);

			dispatch(updateDropTask(section.section_id, newTaskOrder, newTasks));
		}
	};

	return (
		<Box component='div' className='list__task-container'>
			<List className='list__tasks'>
				<Container
					// onDragStart={e => console.log('drag started', e)}
					// onDragEnd={e => console.log('drag end', e)}
					// onDragEnter={() => {
					// 	//   console.log("drag enter:", column.id);
					// }}
					// onDragLeave={() => {
					// 	//   console.log("drag leave:", column.id);
					// }}
					// onDropReady={p => console.log('Drop ready: ', p)}
					groupName='col'
					onDrop={dropResult => {
						onTaskDrop(dropResult, section);
					}}
					getChildPayload={index => listTask[index]}
					dragClass='task-ghost'
					dropClass='task-ghost-drop'
					dropPlaceholder={{
						animationDuration: 150,
						showOnTop: true,
						className: 'task-drop-preview',
					}}
					dropPlaceholderAnimationDuration={200}
				>
					{renderListTask()}
				</Container>

				<Box className='btn__addTask'>+ Add Task</Box>
			</List>
		</Box>
	);
}
