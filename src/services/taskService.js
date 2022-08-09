import requestApi from '../utils/requestApi';

export const getAllTaskInProjectService = async projectId => {
	try {
		const respone = await requestApi({
			method: 'get',
			url: `task/8/${projectId}`,
		});
		return respone;
	} catch (error) {
		console.log(error.response);
		// return error.response;
	}
};

export const assignTaskService = async (taskUpdate, taskUpdateId) => {
	try {
		const respone = await requestApi({
			method: 'put',
			url: `task/${taskUpdateId}`,
			data: { ...taskUpdate },
		});
		return respone;
	} catch (error) {
		console.log(error.response);
		// return error.response;
	}
};

export const updateTaskService = async task => {
	try {
		
		const taskUpdate = {
			taskName: task.taskName,
			description: task.description,
			assigneTo: task.assigneTo === null ? '' : task.assigneTo.email,
			startDate: task.startDate === null ? '' : task.startDate,
			dueDate: task.dueDate === null ? '' : task.dueDate,
			priorityValue: task.priorityValue,
			sectionId: task.sectionId,
		};
		console.log("taskUpdate trong service",taskUpdate);
		const respone = await requestApi({
			method: 'put',
			url: `task/${task._id}`,
			data: {...taskUpdate},
		});
		return respone;
	} catch (error) {
		console.log(error.response);
		// return error.response;
	}
};
