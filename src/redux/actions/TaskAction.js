import {
	assignTaskService,
	getAllTaskInProjectService,
	updateTaskService,
} from '../../services/taskService';
import {
	GET_ALL_TASK_IN_PROJECT,
	GET_ALL_TASK_ORDER_IN_PROJECT,
	UPDATE_DROP_TASK,
} from '../types/TaskTypes';

export const getAllTaskInProjectApi = projectId => {
	return async dispatch => {
		const { data } = await getAllTaskInProjectService(projectId);

		dispatch({
			type: GET_ALL_TASK_IN_PROJECT,
			dataTasks: data,
		});
	};
};

export const getAllTaskOrderAction = taskOrderInProject => {
	let action = {
		type: GET_ALL_TASK_ORDER_IN_PROJECT,
		taskOrderInProject,
	};

	return action;
};

export const updateDropTask = (sectionIdDrop, taskDrag) => {
	let action = {
		type: UPDATE_DROP_TASK,
		sectionIdDrop,
		taskDrag,
	};

	return action;
};

export const assignTaskApi = (taskUpdate) => {
	return async dispatch => {
		console.log("taskUpdate trong action",taskUpdate)
		// const { data } = await assignTaskService(taskUpdate, taskUpdateId);
		const { data } = await updateTaskService(taskUpdate);

		dispatch(getAllTaskInProjectApi(data.projectId));
	};
};

export const setDateTaskApi = taskUpdate => {
	return async dispatch => {
		const { data } = await updateTaskService(taskUpdate);

		dispatch(getAllTaskInProjectApi(data.projectId));
	};
};
