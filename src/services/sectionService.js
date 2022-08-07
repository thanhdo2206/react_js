import requestApi from '../utils/requestApi';

export const getAllSectionService = async projectId => {
	try {
		const respone = await requestApi({
			method: 'get',
			url: `section/${projectId}`,
		});
		return respone;
	} catch (error) {
		console.log(error.response);
		// return error.response;
	}
};

export const addSectionService = async newSection => {
	try {
		const respone = await requestApi({
			method: 'post',
			url: 'section',
			data : {...newSection}
		});
		return respone;
	} catch (error) {
		console.log(error.response);
		// return error.response;
	}
};
