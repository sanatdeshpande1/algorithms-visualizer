import React from "react";

const ArrayBar = (props) => {
  console.log(props);
  const barHeight = props.height + "px";

  return (
    <div
      className="array-bar"
      id={props.id}
      style={{ height: barHeight }}
    ></div>
  );
};

export default ArrayBar;
