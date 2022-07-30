import data from '../../data/Workspaces.json';

import {
	SET_CURRENT_WORKSPACE,
	CREATE_PROJECT_OF_WORKSPACE,
	ARCHIVE_PROJECT,
} from '../types/AsanaTypes';

const { Workspaces, projects } = data;

const initialState = {
	arrWorkspaces: Workspaces,
	currentWorkSpace: {},
	
};

const WorkspaceReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_WORKSPACE: {
			let currentWorkspace = state.arrWorkspaces.find(
				workspace => workspace.workspace_id === action.workspaceId
			);

			console.log('set current', state.currentWorkSpace.projects);

			state.currentWorkSpace = { ...currentWorkspace };

			// state.currentWorkSpace = { ...action.dataWorkspace };


			return { ...state };
		}
		case CREATE_PROJECT_OF_WORKSPACE: {
			let newProject = {
				project_id: Date.now().toString(),
				project_name: action.projectName,
				project_status: false,
			};

			state.currentWorkSpace.projects = [
				...state.currentWorkSpace.projects,
				newProject,
			];

			state.currentWorkSpace = { ...state.currentWorkSpace };

			return { ...state };
		}
		case ARCHIVE_PROJECT: {
			let projectArchive = state.currentWorkSpace.projects.find(
				project => project.project_id === action.projectId
			);
			projectArchive.project_status = action.status;

			state.currentWorkSpace = { ...state.currentWorkSpace };

			return { ...state };
		}

		default:
			return { ...state };
	}
};

export default WorkspaceReducer;
