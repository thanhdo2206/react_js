import { GET_ALL_TASK_IN_PROJECT } from "../types/TaskTypes";

const initialState = {
    arrTask:[],
    taskOrders :[],
}

const TaskReducer =  (state = initialState, action) => {
  switch (action.type) {

  case GET_ALL_TASK_IN_PROJECT:
    state.arrTask = action.dataTasks;
    return { ...state}

  default:
    return { ...state}

  }
}

export default TaskReducer;