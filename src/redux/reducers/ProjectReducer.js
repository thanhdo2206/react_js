import data from '../../data/Workspaces.json';
import { mapOrder } from '../../utils/sort';

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

const { Workspaces, projects } = data;

const initialState = {
	arrProject: [],
	currentProject: {},
};

const ProjectReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_PROJECT_API: {
			state.arrProject = action.dataProject;

			return { ...state };
		}
		case SET_CURRENT_PROJECT: {
			state.currentProject = action.dataProject;

			return { ...state };
		}
		case UPDATE_DROP_SECTION: {
			state.currentProject = {
				...state.currentProject,
				sectionOrder: action.newSectionOrder,
			};

			return { ...state };
		}


		
		case UPDATE_DROP_TASK: {
			const { sections } = state.currentProject;
			let sectionCurrent = sections.find(
				section => section.section_id === action.sectionId
			);
			sectionCurrent.tasks = action.newTasks;
			sectionCurrent.taskOrder = action.newTaskOrder;

			state.currentProject = {
				...state.currentProject,
			};

			return { ...state };
		}





		case ADD_SECTION: {
			let newSection = {
				section_id: Date.now().toString(),
				section_name: action.nameSection,
				taskOrder: [],
				tasks: [],
			};

			state.currentProject.sections.push(newSection);
			state.currentProject.sectionOrder.push(newSection.section_id);

			state.currentProject = {
				...state.currentProject,
			};

			return { ...state };
		}
		case ADD_SECTION_LEFT_RIGHT: {
			let { sections, sectionOrder } = state.currentProject;
			let newSection = {
				section_id: Date.now().toString(),
				section_name: action.nameNewSection,
				taskOrder: [],
				tasks: [],
			};

			let indexSectionCurrent = sections.findIndex(
				section => section.section_id === action.sectionId
			);

			let indexAddSection = indexSectionCurrent + action.checkLeftRight;

			sections.push(newSection);
			sectionOrder.splice(indexAddSection, 0, newSection.section_id);

			state.currentProject = {
				...state.currentProject,
			};

			return { ...state };
		}
		case EDIT_SECTION: {
			const { sections } = state.currentProject;
			let sectionEdit = sections.find(
				section => section.section_id === action.sectionId
			);
			sectionEdit.section_name = action.newNameSection;

			state.currentProject = {
				...state.currentProject,
			};

			return { ...state };
		}
		case DELETE_SECTION: {
			const { sections, sectionOrder } = state.currentProject;
			let indexSectionEdit = sections.findIndex(
				section => section.section_id === action.sectionId
			);
			sections.splice(indexSectionEdit, 1);
			sectionOrder.splice(indexSectionEdit, 1);

			state.currentProject = {
				...state.currentProject,
			};

			return { ...state };
		}
		case 'ADD_TASK': {
			const { sections } = state.currentProject;
			const { tasks, taskOrder } = sections.find(
				section => section.section_id === action.sectionId
			);

			let newTask = {
				task_id: Date.now().toString(),
				task_name: action.nameNewTask,
				assigne_to: 'Tuan@111.com',
				due_date: '1/1/2000',
				priority: 'red',
				created_by: 'tuan@222.com',
				task_progress: 'pending',
				status: false,
			};

			tasks.push(newTask);
			taskOrder.push(newTask.task_id);

			state.currentProject = {
				...state.currentProject,
			};

			return { ...state };
		}

		default:
			return { ...state };
	}
};

export default ProjectReducer;
