import { getAllTaskInProjectService } from '../../services/taskService';
import {
	GET_ALL_TASK_IN_PROJECT,
	GET_ALL_TASK__ORDER_IN_PROJECT,
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
		type: GET_ALL_TASK__ORDER_IN_PROJECT,
		taskOrderInProject,
	};

	return action;
};
