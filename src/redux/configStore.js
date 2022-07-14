import {combineReducers,createStore} from "redux";
import AsanaReducer from "./reducers/AsanaReducer"

const rootReducer = combineReducers({
    AsanaReducer,
})

const store = createStore(rootReducer);

export default store;