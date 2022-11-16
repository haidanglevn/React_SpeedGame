import "./App.css";
import React, { Component } from "react";
import Circle from "./Circle";
import GameOver from "./GameOver";

import click from "./assets/sounds/click2.wav";
import background from "./assets/sounds/christmas background.mp3";
import gameend from "./assets/sounds/gameend.wav";
import clickright from "./assets/sounds/clickright.wav";
import clickwrong from "./assets/sounds/minuslife.wav";

let clickSound = new Audio(click);
let backgroundMusic = new Audio(background);
let gameEndSound = new Audio(gameend);
let clickRightSound = new Audio(clickright);
let clickWrongSound = new Audio(clickwrong);

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
    current: undefined,
    health: 5,
    pace: 1000,
    styleDefault: "circle",
    styleActive: "circle active",
    gameStart: false,
    showGameOver: false,
    buttonDisable: "disabled",
    musicPlay: false,
  };

  timer;

  clickPlay = () => {
    if (clickSound.paused) {
      clickSound.play();
    } else {
      clickSound.currentTime = 0;
    }
  };
  clickRightPlay = () => {
    if (clickRightSound.paused) {
      clickRightSound.play();
    } else {
      clickRightSound.currentTime = 0;
    }
  };
  clickWrongPlay = () => {
    if (clickWrongSound.paused) {
      clickWrongSound.play();
    } else {
      clickWrongSound.currentTime = 0;
    }
  };

  backgroundMusicPlay = () => {
    if (this.state.musicPlay === false) {
      backgroundMusic.play();
      backgroundMusic.loop = true;
      this.setState({
        musicPlay: true,
      });
    } else if (this.state.musicPlay === true) {
      backgroundMusic.pause();
      this.setState({
        musicPlay: false,
      });
    }
  };

  clickHandler = (event) => {
    this.clickPlay();
    if (this.state.gameStart === true) {
      if (event.target.id == this.state.current) {
        this.clickRightPlay();
        this.setState({
          score: this.state.score + 1,
        });
      } else {
        this.clickWrongPlay();

        this.setState({
          health: this.state.health - 1,
        });
        if (this.state.health <= 1) {
          this.setState({
            endGame: true,
          });
          this.endHandler();
          return;
        }
      }
    }
  };
  randomNo = () => {
    let current = this.state.current;
    let nextActive = Math.floor(Math.random() * 4 + 1);
    if (nextActive == current) {
      nextActive = Math.floor(Math.random() * 4 + 1);
      this.setState({
        current: nextActive,
      });
    } else {
      this.setState({
        current: nextActive,
        pace: this.state.pace * 0.98,
      });
    }
    this.timer = setTimeout(this.randomNo, this.state.pace);
  };

  startHandler = () => {
    this.randomNo();
    this.setState({
      gameStart: true,
    });
  };

  endHandler = () => {
    gameEndSound.play();
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true,
    });
  };

  resetHandler = () => {
    this.setState({
      score: 0,
      current: undefined,
      health: 5,
      pace: 1000,
      gameStart: false,
      gameEnd: false,
      showGameOver: false,
    });
  };

  render() {
    let circleArr = this.state.circle;
    const modal = () => {
      if (this.state.showGameOver === true) {
        return (
          <GameOver score={this.state.score} resetHandler={this.resetHandler} />
        );
      }
    };
    const musicControl = () => {
      if (this.state.musicPlay === false) {
        return (
          <div
            className="musicPlayer play"
            onClick={this.backgroundMusicPlay}
          ></div>
        );
      } else {
        return (
          <div
            className="musicPlayer pause"
            onClick={this.backgroundMusicPlay}
          ></div>
        );
      }
    };
    return (
      <div className="App">
        <h1>SPEED GAME</h1>
        <h2>Press Start and Unwrap the present !</h2>
        <h2>Your score is : {this.state.score}</h2>
        <h2 id="health">❤ {this.state.health}</h2>

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
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.endHandler}>End</button>
        {musicControl()}
        {modal()}
      </div>
    );
  }
}

export default App;
