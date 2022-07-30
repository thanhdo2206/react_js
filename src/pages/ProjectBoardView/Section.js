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

	const setAddSectionLeft = () => {
		setDisplayFormAddSectionLeft(true);
		setLeftRight(0);
	};

	const setAddSectionRight = async () => {
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
					setAddSectionLeft={setAddSectionLeft}
					setAddSectionRight={setAddSectionRight}
					section={section}
				></BoardHeader>
				<ListTask section={section}></ListTask>
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
