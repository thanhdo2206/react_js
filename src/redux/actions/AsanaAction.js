import { CREATE_PROJECT_OF_WORKSPACE } from '../types/AsanaTypes';


export const createProject = (projectName)=>{
    let action = {
        type:CREATE_PROJECT_OF_WORKSPACE,
        projectName,
    }

    return action;
}