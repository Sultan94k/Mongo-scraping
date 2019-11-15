//! importin react and wrapper.css
import React from "react";
import "./Wrapper.css";

//children of..
const Wrapper = props => <div className="wrapper">{props.children}</div>;
export default Wrapper;
