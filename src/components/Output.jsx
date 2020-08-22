import React from "react";
import { connect } from "react-redux";

function Output(props) {
  //console.log(props.output);
  return <div>{props.output}</div>;
}

const mapStateToProps = (state) => ({
  output: state.output,
});

export default connect(mapStateToProps)(Output);
