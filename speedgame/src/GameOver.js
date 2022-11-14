import React from 'react';

const GameOver = (props) => {
    return (
        <div>
            <h1>This is the overlay</h1>
            <h2>Your final score is: {props.score} </h2>
        </div>
    );
};

export default GameOver;