import React, { useState } from "react";
import { connect } from "react-redux";
//import {ADD, MINUS, MULTIPLY, DIVISION} from "../constants/counts"
import {addNumber, minusNumber, multiplyNumber, devisionNumber} from "../actions/counts"

function Calculator(props) {
  const [value, setValue] = useState(0);

    const handleClickAdd = (e) => {
        props.add(value);
    }
    const handleClickMinus = (e) => {
        props.minus(value);
    }
    const handleClickMultiply = (e) => {
        props.multiply(value);
    }
    const handleClickDevision = (e) => {
        props.devision(value);
    }
    const handleChange = (e) => {
      setValue(+e.target.value);
    };
  

  return (
    <div>
        <p>Calculator</p>
        <input value={value} onChange={handleChange} type="number" />
        <button onClick ={handleClickAdd}>Add</button>
        <button onClick ={handleClickMinus}>Minus</button>
        <button onClick ={handleClickMultiply}>Multiply</button>
        <button onClick ={handleClickDevision}>Devision</button>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//     state
//   });
  const mapDispatchToProps = (dispatch) => {
    return {
        add: (number) => dispatch(addNumber(number)),
        minus: (number) => dispatch(minusNumber(number)),
        multiply: (number) => dispatch(multiplyNumber(number)),
        devision: (number) => dispatch(devisionNumber(number)),
    };
  };
export default connect(null, mapDispatchToProps)(Calculator);