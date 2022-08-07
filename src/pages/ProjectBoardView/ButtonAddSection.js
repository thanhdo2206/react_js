import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { addSectionAction } from '../../redux/actions/ProjectAction';
import AddIcon from '@mui/icons-material/Add';
import FormNewSection from './FormNewSection';
import { addSectionApi } from '../../redux/actions/SectionAction';

export default function ButtonAddSection(props) {
	const { sectionOrder, _id } = useSelector(
		state => state.ProjectReducer.currentProject
	);

	console.log('sectionOrder',sectionOrder);
	const dispatch = useDispatch();

	const [displayBtnAddSection, setDisplayBtnAddSection] = useState(true);

	const addSection = async nameSection => {
		let sectionNameInput = nameSection;

		if (!nameSection.trim()) {
			sectionNameInput = 'Untitled section';
		}

		const newSection = {
			sectionName: sectionNameInput,
			taskOrder: [],
			projectId: _id,
		};

		await dispatch(addSectionApi(newSection));
	};

	const handleSubmit = (event, nameSection) => {
		event.preventDefault();
		addSection(nameSection);
		setDisplayBtnAddSection(true);
	};

	const handleBlur = nameSection => {
		// if (nameSection.trim()) {
		// 	dispatch(addSectionAction(nameSection));
		// }
		// setDisplayBtnAddSection(true);
	};

	return (
		<Box sx={{ minWidth: '380px', height: '100%' }}>
			{displayBtnAddSection ? (
				<Box
					component='div'
					className='btn__addSection'
					onClick={() => {
						setDisplayBtnAddSection(false);
					}}
				>
					<AddIcon fontSize='small' />
					<span style={{ marginTop: '4px' }}>Add Section</span>
				</Box>
			) : (
				<FormNewSection
					isDisplayFormAddSection={true}
					handleSubmit={handleSubmit}
					handleBlur={handleBlur}
				/>
			)}
		</Box>
	);
}
