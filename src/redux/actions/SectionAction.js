import { updateDropSectionService } from '../../services/projectService';
import {
	addSectionService,
	getAllSectionService,
} from '../../services/sectionService';
import { SET_CURRENT_PROJECT, UPDATE_DROP_SECTION } from '../types/ProjectTypes';
import { GET_ALL_SECTION_API } from '../types/SectionTypes';
import { getProjectApi, updateDropSection, updateDropSectionApi } from './ProjectAction';

export const getAllSectionApi = projectId => {
	return async dispatch => {
		const { data } = await getAllSectionService(projectId);

		// console.log('data',data);

		dispatch({
			type: GET_ALL_SECTION_API,
			dataSection: data,
		});
	};
};



export const addSectionApi = (newSection) => {
	return async dispatch => {
		
		const { data } = await addSectionService(newSection);

		

		// console.log(data);
		await dispatch(getProjectApi((data.projectId)))
		
		

		dispatch(getAllSectionApi(newSection.projectId));
	};
};



