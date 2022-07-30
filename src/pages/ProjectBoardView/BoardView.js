import React, { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import './BoardView.css';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from '../../utils/dragDrop';
import { updateDropSection } from '../../redux/actions/ProjectAction';
import { mapOrder } from '../../utils/sort';
import ButtonAddSection from './ButtonAddSection';
import Section from './Section';

export default function BoardView() {
	const currentProject = useSelector(
		state => state.ProjectReducer.currentProject
	);

	const dispatch = useDispatch();

	const boardColumnsDom = useRef(null);
	const boardContainerDom = useRef(null);

	const { sections, sectionOrder } = currentProject;

	const sectionsSort = mapOrder(sections, sectionOrder, 'section_id');

	const onSectionDrop = dropResult => {
		let newSections = applyDrag(sections, dropResult);

		let newSectionOrder = newSections.map(section => section.section_id);

		dispatch(updateDropSection(newSectionOrder));
	};

	const renderSections = () => {
		return sectionsSort.map((section, index) => {
			const keyRender = `${section.section_name} ${Date.now()}`;
			return (
				<Draggable key={keyRender}>
					<Section section={section} />
				</Draggable>
			);
		});
	};

	const scrollBoardColumns = () => {
		console.log(boardContainerDom.current.offsetWidth);
		boardColumnsDom.current.scrollLeft = boardContainerDom.current.offsetWidth + 369;
	};

	return (
		<Box component='div' className='board__columns' ref={boardColumnsDom}>
			<Box component='div' className='board__container-columns' ref={boardContainerDom}>
				<button
					onClick={() => {
						scrollBoardColumns();
					}}
				>
					Click
				</button>
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

					<ButtonAddSection scrollBoardColumns={scrollBoardColumns}/>
				</Container>
			</Box>
		</Box>
	);
}
