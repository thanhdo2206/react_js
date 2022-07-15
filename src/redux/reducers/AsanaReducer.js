import data from '../../data/Workspaces.json';
import { CREATE_PROJECT_OF_WORKSPACE } from '../types/AsanaTypes';

const { Workspaces } = data;
const initialState = {
	arrWorkspaces: Workspaces,
	currentWorkSpace: { ...Workspaces[0] },
	
};

const AsanaReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PROJECT_OF_WORKSPACE:{
			console.log(state.currentWorkSpace.projects);
			
			let newProject = {
				project_id: Date.now(),
				project_name: action.projectName,
				project_status: 0
			};
			state.currentWorkSpace.projects = [...state.currentWorkSpace.projects,newProject];
			return { ...state };

		}
		default:
			return { ...state };
	}
};

export default AsanaReducer;
