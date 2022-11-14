import "./App.css";
import React, { Component } from "react";
import Circle from "./Circle";

class App extends Component {
  state = {
    circleNo: 4,
    score: 0,
    current: 0,
  };

  clickHandler = (event) => {
    console.log(`circle ${event.target.id} is clicked`);
    this.setState({
      score: this.state.score + 1,
    });
  };
  randomNo = () => {
    let current = this.state.current;
    console.log("At the start, current is ", current);
    let nextActive = Math.floor(Math.random() * 4 + 1);
    console.log("Machine generates an random number: ", nextActive);

    if (nextActive == current) {
      nextActive = Math.floor(Math.random() * 4 + 1);
      console.log(
        "If these are the same, then it generates once more to: ",
        nextActive
      );
      this.setState({
        current: nextActive,
      });
    } else {
      this.setState({
        current: nextActive,
      });
    }
    console.log("The nextActive for next round: ", nextActive);
    console.log("---------------------------");
  };

  startHandler = () => {
    window.setInterval(this.randomNo, 2000);
  };
  stopHandler = () => {
    window.clearInterval(this.startHandler);
  };

  render() {
    let arr = Array.from({ length: this.state.circleNo }, () => ({ id: "" }));
    arr[0].id = 1;
    arr[1].id = 2;
    arr[2].id = 3;
    arr[3].id = 4;

    
    return (
      <div className="App">
        <h1>SPEED GAME</h1>
        <h2>Your score is : {this.state.score}</h2>
        <button onClick={this.startHandler}>Start game</button>
        <button onClick={this.stopHandler}>Stop game</button>
        <div className="circles">
          {arr.map((circle) => (
            <Circle
              key={circle.id}
              clickHandler={this.clickHandler}
              id={circle.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
