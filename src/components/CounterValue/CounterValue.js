import React from 'react';
import './CounterValue.css';

const CounterValue = (props) => {
  return (
    <div className="CounterValue">
      Counter: {props.value}
    </div>
  );
}

export default CounterValue;