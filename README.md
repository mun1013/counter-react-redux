# Counter-react-redux

A simple counter app that is focusing on redux state management.

## Getting started

```bash
# action creator
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

# Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
}

## In Component
# get the state from redux
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
  }
};

# Dispatch as a prop in component
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
  }
}

connect(mapStateToProps, mapDispatchToProps)(Counter);

```

## Redux

Redux as a state management and the directory structure as below:

```

├── src
│   ├── Store // create a store for the state of components
│       ├── actions
│       │   ├── counter.js  // user perform CRUD actions on the counter
│       │   ├── result.js  // user perform add and delete actions on the stored result
│       │   └── actionTypes.js
│       │   └── index.js
│       ├── reducers
│           ├── counter.js // return the updated state to the counter
│           └── result.js 

```

## Installation 

1. Make sure to install [node](https://nodejs.org/en/).

2. Install the packages:

```bash
npm install
```

## Usage

```bash
# the react app will run on port 3000
npm start
```

It will redirect you to http://localhost:3000/ 
