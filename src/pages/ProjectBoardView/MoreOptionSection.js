import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TooltipCustomize } from '../../components/ToolTip/ToolTip';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ConfirmModal from '../../components/Modal/ConfirmModal';
import {
	MODAL_ACTION_CLOSE,
	MODAL_ACTION_CONFIRM,
} from '../../constants/constants';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSectionAction } from '../../redux/actions/ProjectAction';

export default function MoreOptionSection(props) {
	const { section, renameSection, setAddSectionLeft, setAddSectionRight } =
		props;
	const dispatch = useDispatch();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleOpenMore = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMore = () => {
		setAnchorEl(null);
	};

	const [isShowModalDelete, setShowModalDelete] = useState(false);

	const toggleModal = () => {
		handleCloseMore();
		setShowModalDelete(!isShowModalDelete);
	};

	const onModalDeleteSection = type => {
		if (type === MODAL_ACTION_CONFIRM) {
			dispatch(deleteSectionAction(section.section_id));
		}

		toggleModal();
	};

	const renameTitleSection = () => {
		handleCloseMore();
		renameSection();
	};

	const addFormSectionRightLeft = checkLeftRight => {
		handleCloseMore();
		if (checkLeftRight) {
			setAddSectionLeft();
			return;
		}

		setAddSectionRight();
	};

	return (
		<Box>
			<TooltipCustomize title='More actions' placement='bottom'>
				<MoreHorizIcon className='btnOption__section' onClick={handleOpenMore} />
			</TooltipCustomize>

			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleCloseMore}
			>
				<MenuItem className='menu__option-item' onClick={renameTitleSection}>
					<CreateOutlinedIcon className='icon__option' />
					Rename Section
				</MenuItem>

				<MenuItem
					className='menu__option-item'
					onClick={() => {
						addFormSectionRightLeft(true);
					}}
				>
					<ArrowBackOutlinedIcon className='icon__option' />
					Add section to left
				</MenuItem>
				<MenuItem
					className='menu__option-item'
					onClick={() => {
						addFormSectionRightLeft(false);
					}}
				>
					<ArrowForwardOutlinedIcon className='icon__option' />
					Add section to right
				</MenuItem>
				<MenuItem className='menu__option-item delete__section-task' onClick={toggleModal}>
					<DeleteOutlineIcon className='icon__option' />
					Delete Section
				</MenuItem>
			</Menu>

			<ConfirmModal
				show={isShowModalDelete}
				title='Delete this section'
				content={
					<span>
						Are you sure you want to delete this section <b>{section.section_name}</b>
						?
					</span>
				}
				onAction={onModalDeleteSection}
				nameBtnConfirm='Delete section'
			/>
		</Box>
	);
}
