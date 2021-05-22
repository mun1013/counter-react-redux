import React from 'react';
import './ResultList.css';

const Result = (props) => {
  const onRemoveHandler = (id) => {
    props.onRemove(id);
  }

  return (
    <div className="result">
      <ul>
        {props.results.map(result => (
          <li key={result.id} onClick={() => onRemoveHandler(result.id)}>{result.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Result;