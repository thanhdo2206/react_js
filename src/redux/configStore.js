import {combineReducers,createStore} from "redux";
import WorkspaceReducer from "./reducers/WorkspaceReducer"
import ProjectReducer from "./reducers/ProjectReducer"


const rootReducer = combineReducers({
    WorkspaceReducer,
    ProjectReducer,
})

const store = createStore(rootReducer);

export default store;