import React, { useState } from "react";
import { connect } from "react-redux";
import {addNumber, minusNumber, multiplyNumber, divisionNumber} from "../actions/counts"

function Calculator(props) {
  const [value, setValue] = useState(0);

  const handleClick = (actionName) => (e) => {
    props[actionName](value);
  };

  const handleChange = (e) => {
    setValue(+e.target.value);
  };

  return (
    <div>
      <p>Calculator</p>
      <input value={value} onChange={handleChange} type="number" />
      <button onClick={handleClick("add")}>Add</button>
      <button onClick={handleClick("minus")}>Minus</button>
      <button onClick={handleClick("multiply")}>Multiply</button>
      <button onClick={handleClick("division")}>Devision</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (number) => dispatch(addNumber(number)),
    minus: (number) => dispatch(minusNumber(number)),
    multiply: (number) => dispatch(multiplyNumber(number)),
    division: (number) => dispatch(divisionNumber(number)),
  };
};

export default connect(null, mapDispatchToProps)(Calculator);
