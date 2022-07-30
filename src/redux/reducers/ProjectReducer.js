import data from '../../data/Workspaces.json';
import { mapOrder } from '../../utils/sort';

import {
	UPDATE_DROP_TASK,
	ADD_SECTION,
	EDIT_SECTION,
	DELETE_SECTION,
	ADD_SECTION_LEFT_RIGHT,
	UPDATE_DROP_SECTION,
} from '../types/AsanaTypes';

const { Workspaces, projects } = data;

const initialState = {
	currentProject: { ...Workspaces[0].projects[0] },
};

const ProjectReducer = (state = initialState, action) => {
	switch (action.type) {
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

		default:
			return { ...state };
	}
};

export default ProjectReducer;
