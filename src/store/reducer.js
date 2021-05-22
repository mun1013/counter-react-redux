import * as actionTypes from './actions';
import { v4 as uuid } from 'uuid';

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.MULTIPLICATION:
      return {
        ...state,
        counter: state.counter * action.value
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: uuid(), value: state.counter})
      }
    case actionTypes.DELETE_RESULT:
      const updatedResult = state.results.filter(e => e.id !== action.id)
      return {
        ...state,
        results: updatedResult
      }
  }
  return state
};

export default reducer;