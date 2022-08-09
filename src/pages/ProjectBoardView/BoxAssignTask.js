import React, { useState } from 'react';
import { TooltipCustomize } from '../../components/ToolTip/ToolTip';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Box, ClickAwayListener } from '@mui/material';
import AssigneeForm from '../../components/assignee/AssigneeForm';
import AvatarAssignee from '../../components/assignee/AvatarAssignee';
import { useSelector, useDispatch } from 'react-redux';
import { assignTaskApi } from '../../redux/actions/TaskAction';
import { convertDateFromDataBase } from '../../utils/date';

export default function BoxAssignTask(props) {
	const { task } = props;

	const dispatch = useDispatch();

	// const { _id, username, email } = task.assigneTo;
	const username = task.assigneTo !== null ? task.assigneTo.username : '';

	const [isOpenAssignee, setOpenAssignee] = useState(false);

	const currentWorkSpace = useSelector(
		state => state.WorkspaceReducer.currentWorkSpace
	);

	const membersWorkspace =
		currentWorkSpace && currentWorkSpace.members ? currentWorkSpace.members : [];

	const handleOpenCloseAssignee = () => {
		setOpenAssignee(!isOpenAssignee);
	};

	const handleClickAwayAssignee = () => {
		setOpenAssignee(false);
	};

	const handleAssigneeMember = member => {
		const taskUpdate = {
			...task,
			assigneTo: { ...task.assigneTo, email: member.email },
		};

		setOpenAssignee(false);
		dispatch(assignTaskApi(taskUpdate));
	};

	return (
		<ClickAwayListener onClickAway={handleClickAwayAssignee}>
			<Box sx={{ display: 'inline-block' }}>
				<TooltipCustomize title='Assign task' placement='bottom'>
					<Box
						onClick={handleOpenCloseAssignee}
						sx={{ marginRight: '8px', display: 'flex' }}
					>
						{!username ? (
							<PersonOutlineOutlinedIcon className='icon__assign__date' />
						) : (
							<AvatarAssignee assignee={username} />
						)}
					</Box>
				</TooltipCustomize>

				<Box className='assignee__board'>
					<AssigneeForm
						memberArr={membersWorkspace}
						onClickAssignee={handleAssigneeMember}
						isDrop={isOpenAssignee}
					/>
				</Box>
			</Box>
		</ClickAwayListener>
	);
}
