# Christmas React Speedgame

A React school project of a christmas-themed speed game. The project is made in React app to familiarize myself with basic functions of React. 

## How the game works: 
### General layout: 
- Health icon display how much health player has 
- Play button to control the background music of the game
- Intro: name of the game, intro line, score
- Four clickable circles to play the game
- Start and end button to start and end the game
- A modal appears when game ends to show the score. 

### Game mechanic:
- The game starts when player press "Start" button, the game generate a random number every few seconds (a round), active the circle to be clickable. The random number cannot be the same as the previous one. 
- If player click the right button: score increase by 1 and button quickly change in style to be reconizable.
- If player click the wrong button: score and health decrease by 1.  
- Miss a circle won't decrease the health. The game runs infinitely.
- Score can be increased and decreased multiple times per round, and each round is faster than the previous one.
- Game ends when health = 0 or player click the "End" button.  

### Additional: 
- Music control button: play and pause state (background music is muted by default)

### Chalenges when study: 
- No react hooks, only manipulating the state is allowed
- React state and how the page rendered is new compared to vanila JS
- There is not yet a button to mute all sound assets, might be added later. For now please mute the browser tab if the music annoys you (sorry T.T). 

## Technologies used

Built with:

- HTML
- JS
- CSS
- Reactjs

## Setup and usage

Live page [here](https://haidanglevn.github.io/React_SpeedGame/)

## Screenshot

## Sources

- [Background photo](https://unsplash.com/photos/NBvcQRdRSeQ)
- [Flaticon gift icon](https://www.flaticon.com/free-icon/gift-box_2575365?related_id=2575284&origin=search)
- [Background music by pixabay](https://pixabay.com/music/christmas-christmas-vacation-christmas-eve-and-new-year-fairy-tale-125673/)

## Authors and acknowledgment
Dang Le

- GitHub @haidanglevn

Margit Tennosaar - Teacher at Business College Helsinki

- GitHub @margittennosaar
- [LinkedIn](https://www.linkedin.com/in/margittennosaar/)
