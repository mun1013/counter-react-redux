import * as actionTypes from './actionTypes';

// ACTION CREATOR
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = (value) => {
  return {
    type: actionTypes.ADD,
    value: value
  };
};

export const multiplication = (value) => {
  return {
    type: actionTypes.MULTIPLICATION,
    value: value
  };
};