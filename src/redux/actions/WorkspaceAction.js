import {
	SET_CURRENT_WORKSPACE,
	CREATE_PROJECT_OF_WORKSPACE,
	ARCHIVE_PROJECT,
} from '../types/AsanaTypes';

export const setCurrentWorkspaceAction = (workspaceId) => {
	let action = {
		type: SET_CURRENT_WORKSPACE,
		workspaceId,
	};

	return action;
};

export const createProjectAction = projectName => {
	let action = {
		type: CREATE_PROJECT_OF_WORKSPACE,
		projectName,
	};

	return action;
};

export const archiveProjectAction = (status, projectId) => {
	let action = {
		type: ARCHIVE_PROJECT,
		status,
		projectId,
	};

	return action;
};

