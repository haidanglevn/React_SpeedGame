import "./App.css";
import React, { Component } from "react";
import Circle from "./Circle";
import GameOver from "./GameOver";

class App extends Component {
  state = {
    circle: [
      {
        id: 1,
        color: "red",
      },
      {
        id: 2,
        color: "blue",
      },
      {
        id: 3,
        color: "yellow",
      },
      {
        id: 4,
        color: "green",
      },
    ],
    score: 0,
    current: 0,
    styleDefault: "circle",
    styleActive: "circle active",
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
    let circleArr = this.state.circle;

    return (
      <div className="App">
        <h1>SPEED GAME</h1>
        <h2>Your score is : {this.state.score}</h2>

        <div className="circles">
          {circleArr.map((circle) => {
            if (circle.id == this.state.current) {
              return (
                <Circle
                  key={circle.id}
                  clickHandler={this.clickHandler}
                  id={circle.id}
                  color={circle.color}
                  style={this.state.styleActive}
                />
              );
            } else {
              return (
                <Circle
                  key={circle.id}
                  clickHandler={this.clickHandler}
                  id={circle.id}
                  color={circle.color}
                  style={this.state.styleDefault}
                />
              );
            }
          })}
        </div>
        <button onClick={this.startHandler}>Start game</button>
        <button onClick={this.stopHandler}>Stop game</button>
        <GameOver score={this.state.score}/>
      </div>
    );
  }
}

export default App;
