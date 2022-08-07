import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ProjectReducer from './reducers/ProjectReducer';
import WorkspaceReducer from './reducers/WorkspaceReducer';
import SectionReducer from './reducers/SectionReducer';
import authReducer from './reducers/authReducer';
import toggleReducer from './reducers/toggleReducer';
import reduxThunk from 'redux-thunk';

const composedEnhances = composeWithDevTools();

const rootReducer = combineReducers({
	WorkspaceReducer,
	ProjectReducer,
	SectionReducer,
	authReducer,
	toggleReducer,
});

const store = createStore(
	rootReducer,
	applyMiddleware(reduxThunk),
	composedEnhances
);

export default store;
