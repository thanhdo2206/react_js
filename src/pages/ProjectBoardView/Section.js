import React, { useEffect, useState, useRef } from 'react';
import FormNewSection from './FormNewSection';
import Box from '@mui/material/Box';
import ListTask from './ListTask';
import BoardHeader from './BoardHeader';
import { addSectionLeftRightAction } from '../../redux/actions/ProjectAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Section(props) {
	const { section } = props;

	const dispatch = useDispatch();

	const [isDisplayFormAddSectionLeft, setDisplayFormAddSectionLeft] =
		useState(false);

	const [isDisplayFormAddSectionRight, setDisplayFormAddSectionRight] =
		useState(false);

	const [checkLeftRight, setLeftRight] = useState();

	const [isDisplayFormNewTaskTop, setDisplayFormNewTaskTop] = useState(false);

	const [isDisplayFormNewTaskBottom, setDisplayFormNewTaskBottom] =
		useState(false);

	const setAddFormSectionLeft = () => {
		setDisplayFormAddSectionLeft(true);
		setLeftRight(0);
	};

	const setAddFormSectionRight = async () => {
		setDisplayFormAddSectionRight(true);
		setLeftRight(1);
	};

	const addSectionRightLeft = (event, nameSection) => {
		event.preventDefault();
		setDisplayFormAddSectionLeft(false);
		setDisplayFormAddSectionRight(false);
		if (!nameSection.trim()) {
			dispatch(
				addSectionLeftRightAction(
					'Untitled section',
					section.section_id,
					checkLeftRight
				)
			);
			return;
		}

		if (checkLeftRight || checkLeftRight >= 0) {
			dispatch(
				addSectionLeftRightAction(nameSection, section.section_id, checkLeftRight)
			);
		}
	};

	const blurFormNewSection = nameSection => {
		if (nameSection.trim()) {
			dispatch(
				addSectionLeftRightAction(nameSection, section.section_id, checkLeftRight)
			);
		}

		setDisplayFormAddSectionLeft(false);
		setDisplayFormAddSectionRight(false);
	};

	const setNewTaskTop = () => {
		setDisplayFormNewTaskTop(true);
	};

	const setNewTaskBottom = () => {
		setDisplayFormNewTaskBottom(true);
	};

	return (
		<Box component='div' sx={{ display: 'flex', height: '100%' }}>
			<Box>
				<FormNewSection
					isDisplayFormAddSection={isDisplayFormAddSectionLeft}
					handleSubmit={addSectionRightLeft}
					handleBlur={blurFormNewSection}
				/>
			</Box>

			<Box component='div' className='section__column-item'>
				<BoardHeader
					setAddFormSectionLeft={setAddFormSectionLeft}
					setAddFormSectionRight={setAddFormSectionRight}
					section={section}
					setNewTaskTop={setNewTaskTop}
				></BoardHeader>
				{/* <ListTask
					isDisplayFormNewTaskTop={isDisplayFormNewTaskTop}
					isDisplayFormNewTaskBottom={isDisplayFormNewTaskBottom}
					section={section}
				></ListTask> */}
				<Box className='btn__addTask' onClick={setNewTaskBottom}>
					+ Add Task
				</Box>
			</Box>

			<Box>
				<FormNewSection
					isDisplayFormAddSection={isDisplayFormAddSectionRight}
					handleSubmit={addSectionRightLeft}
					handleBlur={blurFormNewSection}
				/>
			</Box>
		</Box>
	);
}
