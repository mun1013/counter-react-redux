import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterValue from '../../components/CounterValue/CounterValue';
import ResultList from '../../components/ResultList/ResultList';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
  state = {
    counter: 0,
    results: []
  }

  render () {
    return (
      <div>
        <CounterValue value={this.props.ctr} />
        <CounterControl label="Increment" onClick={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" onClick={this.props.onDecrementCounter}  />
        <CounterControl label="Add 10" onClick={this.props.onAddCounter}  />
        <CounterControl label="Multiple 5" onClick={this.props.onMultipleCounter}  />
        <hr style={{border: 'none'}}/>
        <CounterControl label="Store" onClick={() => this.props.onStoreResult(this.props.ctr)}/>
        <ResultList results={this.props.storedResults} onRemove={(id) => this.props.onDeleteResult(id)}/>
      </div>
    );
  }
}

// get the state from redux
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(10)),
    onMultipleCounter: () => dispatch(actionCreators.multiplication(5)),
    onStoreResult: (res) => dispatch(actionCreators.storeResult(res)),
    onDeleteResult: (elementId) =>  dispatch(actionCreators.deleteResult(elementId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);