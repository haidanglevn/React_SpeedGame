import React from 'react';
import "./Circle.css"
const Circle = (props) => {
    let id = props.id;
    return (
        <div className='circle' id={props.id} onClick={props.clickHandler}>
            id: {props.id}
        </div>
    );
};

export default Circle;