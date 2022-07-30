import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { TooltipCustomizer } from '../../components/ToolTip/ToolTip';
import MoreOptionSection from './MoreOptionSection';
import { useSelector, useDispatch } from 'react-redux';
import { editTitleSectionAction } from '../../redux/actions/ProjectAction';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { TooltipCustomize } from '../../components/ToolTip/ToolTip';

export default function BoardHeader(props) {
	const { section, setAddSectionLeft, setAddSectionRight } = props;

	const titleSectionRef = useRef(null);

	const dispatch = useDispatch();

	const [titleSection, setTitleSection] = useState(section.section_name);

	const handleTitleChange = e => {
		const { value } = e.target;
		setTitleSection(value);
	};

	const editTitleSection = () => {
		if (!titleSection.trim()) {
			dispatch(editTitleSectionAction('Untitled section', section.section_id));
			return;
		}
		dispatch(editTitleSectionAction(titleSection, section.section_id));
	};

	const renameSection = () => {
		titleSectionRef.current.click();
	};

	return (
		<Box component='header' className='board__header '>
			<TooltipCustomize title='Drag to move' placement='bottom'>
				<DragIndicatorIcon className='icon__drag column-drag-handle' />
			</TooltipCustomize>
			<form
				onSubmit={e => {
					e.preventDefault();
					editTitleSection();
				}}
				onBlur={editTitleSection}
			>
				<input
					className='title__section'
					type='text'
					spellCheck='false'
					value={titleSection}
					onClick={e => {
						e.target.select();
					}}
					onChange={handleTitleChange}
					onMouseDown={e => {
						e.preventDefault();
					}}
					ref={titleSectionRef}
				/>
			</form>
			<TooltipCustomize title='Add task' placement='bottom'>
				<AddIcon className='btnOption__section' fontSize='small' />
			</TooltipCustomize>

			<MoreOptionSection
				setAddSectionLeft={setAddSectionLeft}
				setAddSectionRight={setAddSectionRight}
				section={section}
				renameSection={renameSection}
			/>
		</Box>
	);
}
