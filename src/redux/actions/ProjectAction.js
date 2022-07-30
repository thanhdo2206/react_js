import {
	UPDATE_DROP_TASK,
	ADD_SECTION,
	EDIT_SECTION,
	DELETE_SECTION,
	ADD_SECTION_LEFT_RIGHT,
    UPDATE_DROP_SECTION
} from '../types/AsanaTypes';

export const updateDropSection = newSectionOrder => {
	let action = {
		type: UPDATE_DROP_SECTION,
		newSectionOrder,
	};

	return action;
};

export const updateDropTask = (sectionId,newTaskOrder,newTasks) => {
	let action = {
		type: UPDATE_DROP_TASK,
		newTaskOrder,
        sectionId,
		newTasks
	};

	return action;
};

export const addSectionAction = (nameSection)=>{
	let action = {
		type: ADD_SECTION,
		nameSection

	}

	return action;
}

export const addSectionLeftRightAction = (nameNewSection,sectionId,checkLeftRight)=>{
	let action = {
		type: ADD_SECTION_LEFT_RIGHT,
		nameNewSection,
		sectionId,
		checkLeftRight
	}

	return action;
}

export const editTitleSectionAction = (newNameSection,sectionId)=>{
	let action = {
		type: EDIT_SECTION,
		newNameSection,
		sectionId

	}

	return action;
}

export const deleteSectionAction = (sectionId)=>{
	let action = {
		type: DELETE_SECTION,
		sectionId

	}

	return action;
}