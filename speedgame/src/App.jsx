import "./App.css";
import React, { Component } from "react";
import Circle from "./Circle";

class App extends Component {
  state = {
    circleNo: 4,
    circles: [
      {id:1},
      {id:2},
      {id:3},
      {id:4},
    ],
    score: 0
  };

  /* leave this for later
  createCircle = () => {
    let arr = Array(this.state.circleNo).fill("a");
    console.log(arr);
    this.setState({
      circles : arr,
    })
  }; */
  clickHandler = (event) => {
    console.log(`circle ${event.target.id} is clicked`)
    this.setState({
      score: this.state.score +1,
    })
  }

  render() {
    let arr = Array.from({ length: this.state.circleNo }, () => ({id: ""}));
    arr[0].id = 1;
    arr[1].id = 2;
    arr[2].id = 3;
    arr[3].id = 4;
    return (
      <div className="App">
        <h1>SPEED GAME</h1>
        <h2>Your score is : {this.state.score}</h2>
        <button onClick={this.clickHandler}>Start game</button>
        <button>Stop game</button>
        <div className="circles">
          {arr.map((circle) => (
            <Circle key={circle.id} clickHandler={this.clickHandler} id={circle.id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
