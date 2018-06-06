import {ADD_PROJECT, REMOVE_PROJECT, UPDATE_PROJECT} from '../constants/action-types';
const initialState = {
  projects: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      /*state.articles.push(action.payload);
      return state;*/
      //return { ...state, articles: state.articles.concat(action.payload) };

      return {
        ...state,
        projects: [action.payload]
      };

      //const arr = state.projects.concat(action.payload);
      //return arr;
    case REMOVE_PROJECT:
      console.log(state.projects);
      const arr1 = state.projects.slice(0,action.payload);
      const arr2 = state.projects.slice(action.payload+1);
      //console.log()
      state = arr1.concat(arr2);
      return state;
    case UPDATE_PROJECT:
    default:
      return state;
  }
};
export default rootReducer;
