import React from "react";

export default function Alert(props) {
  return (
    <React.Fragment>
      <div
        style={{
          color: props.textColor,
          backgroundColor: props.bgColor,
          padding: "10px",
          margin: "10px",
          borderRadius: "5px"
        }}
      >
        {props.message}
      </div>
    </React.Fragment>
  );
}
