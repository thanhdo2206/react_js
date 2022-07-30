import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { addSectionAction } from '../../redux/actions/ProjectAction';
import AddIcon from '@mui/icons-material/Add';
import FormNewSection from './FormNewSection';

export default function ButtonAddSection(props) {
	const dispatch = useDispatch();

	const [displayBtnAddSection, setDisplayBtnAddSection] = useState(true);

	const { scrollBoardColumns } = props;
	const addSection = nameSection => {
		if (!nameSection.trim()) {
			dispatch(addSectionAction('Untitled section'));
			return;
		}

		dispatch(addSectionAction(nameSection));
	};

	const handleSubmit = (event, nameSection) => {
		event.preventDefault();
		addSection(nameSection);
		console.log('scroll submit');
		// scrollBoardColumns();
	};

	const handleBlur = nameSection => {
		console.log('scroll blur');
		// scrollBoardColumns();
		if (nameSection.trim()) {
			dispatch(addSectionAction(nameSection));
		}

		setDisplayBtnAddSection(true);
	};

	return (
		<Box sx={{ width: '380px', height: '100%' }}>
			{displayBtnAddSection ? (
				<Box
					component='div'
					className='btn__addSection'
					onClick={() => {
						setDisplayBtnAddSection(false);
						// scrollBoardColumns();
					}}
				>
					<AddIcon fontSize='small' />
					<span style={{ marginTop: '4px' }}>Add Section</span>
				</Box>
			) : (
				// <Box
				// 	component='form'
				// 	className='form__add-section section__column-item'
				// 	onSubmit={handleSubmit}
				// >
				// 	<input
				// 		type='text'
				// 		className='input__add-section'
				// 		placeholder='New Section'
				// 		autoFocus
				// 		onChange={getNameSection}
				// 		onBlur={handleBlur}
				// 		name='nameSection'
				// 		value={nameSection}
				// 		ref={inputAddSectionRef}
				// 	/>
				// 	<Box component='div' className='list__task-container list__task-addsection'></Box>
				// </Box>
				<FormNewSection
					isDisplayFormAddSection={true}
					handleSubmit={handleSubmit}
					handleBlur={handleBlur}
				/>
			)}
		</Box>
	);
}
