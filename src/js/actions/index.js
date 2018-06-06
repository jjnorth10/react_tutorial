import {ADD_PROJECT, REMOVE_PROJECT, UPDATE_PROJECT} from '../constants/action-types';
export const addProject = article => ({ type: ADD_PROJECT, payload: article });

export const removeProject = id => ({ type: REMOVE_PROJECT, payload: id });

export const updateProject = id => ({ type: UPDATE_PROJECT, payload: id });
