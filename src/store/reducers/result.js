import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { v4 as uuid } from 'uuid';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(e => e.id !== action.resultElId);
  return updateObject(state, { results: updatedArray });
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: uuid(), value: action.result})
      }
    case actionTypes.DELETE_RESULT: return deleteResult(state, action);
      // const updatedResult = state.results.filter(e => e.id !== action.id)
      // return {
      //   ...state,
      //   results: updatedResult
      // }
    default:
      break;
  }
  return state
};

export default resultReducer;