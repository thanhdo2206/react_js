import {
	UPDATE_DROP_TASK,
	ADD_SECTION,
	EDIT_SECTION,
	DELETE_SECTION,
	ADD_SECTION_LEFT_RIGHT,
	UPDATE_DROP_SECTION,
	SET_CURRENT_PROJECT,
	GET_ALL_PROJECT_API,
} from '../types/ProjectTypes';

import {
	createProjectService,
	getAllProjectInWorkspaceService,
	archiveProjectService,
	unArchiveProjectService,
	getProjectService,
	updateDropSectionService,
} from '../../services/projectService';

// api
export const getAllProjectInWorkspaceApi = worksapceId => {
	return async dispatch => {
		const { data } = await getAllProjectInWorkspaceService(worksapceId);

		dispatch({
			type: GET_ALL_PROJECT_API,
			dataProject: data,
		});
	};
};

export const createProjectApi = dataProject => {
	return async dispatch => {
		const { data } = await createProjectService(dataProject);

		dispatch(getAllProjectInWorkspaceApi(data.workspaceId));
	};
};

export const archiveUnarchiveProjectApi = (status, projectId) => {
	return async dispatch => {
		const { data } = status
			? await archiveProjectService(projectId)
			: await unArchiveProjectService(projectId);

		dispatch(getAllProjectInWorkspaceApi(data.workspaceId));
	};
};

export const getProjectApi = projectId => {
	return async dispatch => {
		const { data } = await getProjectService(projectId);

		dispatch({
			type: SET_CURRENT_PROJECT,
			dataProject: data,
		});
	};
};

export const updateDropSectionApi = (newSectionOrder, projectId) => {
	return async dispatch => {
		const { data } = await updateDropSectionService(newSectionOrder, projectId);

		dispatch({
			type: SET_CURRENT_PROJECT,
			dataProject: data,
		});
	};
};

export const updateDropSection = newSectionOrder => {
	let action = {
		type: UPDATE_DROP_SECTION,
		newSectionOrder,
	};
	

	return action;
};

// móc data
export const setCurrentProjectAction = dataProject => {
	let action = {
		type: SET_CURRENT_PROJECT,
		dataProject,
	};

	return action;
};

export const updateDropTask = (sectionId, newTaskOrder, newTasks) => {
	let action = {
		type: UPDATE_DROP_TASK,
		newTaskOrder,
		sectionId,
		newTasks,
	};

	return action;
};

export const addSectionAction = nameSection => {
	let action = {
		type: ADD_SECTION,
		nameSection,
	};

	return action;
};

export const addSectionLeftRightAction = (
	nameNewSection,
	sectionId,
	checkLeftRight
) => {
	let action = {
		type: ADD_SECTION_LEFT_RIGHT,
		nameNewSection,
		sectionId,
		checkLeftRight,
	};

	return action;
};

export const editTitleSectionAction = (newNameSection, sectionId) => {
	let action = {
		type: EDIT_SECTION,
		newNameSection,
		sectionId,
	};

	return action;
};

export const deleteSectionAction = sectionId => {
	let action = {
		type: DELETE_SECTION,
		sectionId,
	};

	return action;
};

export const addTaskAction = (nameNewTask, sectionId) => {
	let action = {
		type: 'ADD_TASK',
		nameNewTask,
		sectionId,
	};

	return action;
};
