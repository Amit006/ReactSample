import React from 'react';

function InputSelection(props) {
    return (
        <select className={props.class} onClick={props.onClick}>
        <option>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    );
  }

  export default InputSelection;