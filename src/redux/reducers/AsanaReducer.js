import data from "../../data/Workspaces.json";
import { GET_PROJECT_OF_WORKSPACE } from "../types/AsanaTypes";

const {Workspaces} = data;
const initialState = {
  arrWorkspaces: Workspaces,
  currentWorkSpace: {...Workspaces[1]},
};



const AsanaReducer =  (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_OF_WORKSPACE:
      return { ...state };

    default:
      return { ...state };
  }
};

export default AsanaReducer;