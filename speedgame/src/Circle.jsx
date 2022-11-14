import React from 'react';
import "./Circle.css"
const Circle = (props) => {
    let propsColor = props.color;
    return (
      <div
        style={{ backgroundColor: propsColor }}
        className={props.style}
        id={props.id}
        onClick={props.clickHandler}
      >
        id: {props.id}
      </div>
    );
};

export default Circle;