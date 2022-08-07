import React, { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import './BoardView.css';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from '../../utils/dragDrop';
import {
	getProjectApi,
	updateDropSection,
	updateDropSectionApi,
} from '../../redux/actions/ProjectAction';

// import {
// 	updateDropSection,
// 	updateDropSectionApi,
// } from '../../redux/actions/SectionAction';
import { mapOrder } from '../../utils/sort';
import ButtonAddSection from './ButtonAddSection';
import Section from './Section';
import { useParams } from 'react-router-dom';
import { getAllSectionApi } from '../../redux/actions/SectionAction';

export default function BoardView() {
	const { sectionOrder } = useSelector(
		state => state.ProjectReducer.currentProject
	);

	const sections = useSelector(state => state.SectionReducer.arrSections);

	const dispatch = useDispatch();

	const { projectId } = useParams();

	useEffect(() => {
		async function fetchData() {
			if (projectId) {
				await dispatch(getAllSectionApi(projectId));
				dispatch(getProjectApi(projectId));
			}
		}

		fetchData();
	}, []);

	const sectionsSort =
		sectionOrder && sections ? mapOrder(sections, sectionOrder, '_id') : [];

	const onSectionDrop = dropResult => {
		let newSections = applyDrag(sections, dropResult);

		let newSectionOrder = newSections.map(section => section._id);

		dispatch(updateDropSectionApi(newSectionOrder, projectId));
		dispatch(updateDropSection(newSectionOrder));
	};

	const renderSections = () => {
		return sectionsSort.map((section, index) => {
			const keyRender = `${section.sectionName} ${Date.now()}`;
			return (
				<Draggable key={keyRender}>
					<Section section={section} />
				</Draggable>
			);
		});
	};

	return (
		<Box component='div' className='board__columns'>
			<Box component='div' className='board__container-columns'>
				<Container
					getChildPayload={index => sections[index]}
					orientation='horizontal'
					onDrop={onSectionDrop}
					dragClass='section-ghost'
					dropClass='section-ghost-drop'
					dragHandleSelector='.column-drag-handle'
					dropPlaceholder={{
						animationDuration: 150,
						showOnTop: true,
						className: 'section-drop-preview',
					}}
				>
					{renderSections()}

					<ButtonAddSection />
				</Container>
			</Box>
		</Box>
	);
}
