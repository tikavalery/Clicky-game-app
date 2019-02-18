import React, { Component } from "react";
import Square from "./components/square";
import "./App.css";
import princess from "./princess.json"

class App extends Component {
  state = {
    princess: princess
  }

  score = 0;
  highScore = 0;


  _nextRound = () => {
    return princess.reverse();
  }

  _playGame = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game <i className="fas fa-chess-queen"></i></h1>
        </header>
        {/* {this.state.princess.map(princess => (<Square key = {princess.id} name = {princess.name} image = {princess.image}/>))} */}
      <div className = "Container">
        <Square name = {this.state.princess[0].name} image = {this.state.princess[0].image}/>
        <Square name = {this.state.princess[1].name} image = {this.state.princess[1].image}/>
        <Square name = {this.state.princess[2].name} image = {this.state.princess[2].image}/>
        <Square name = {this.state.princess[3].name} image = {this.state.princess[3].image}/>
        <p className = 'clearfix'></p>
        <Square name = {this.state.princess[4].name} image = {this.state.princess[4].image}/>
        <Square name = {this.state.princess[5].name} image = {this.state.princess[5].image}/>
        <Square name = {this.state.princess[6].name} image = {this.state.princess[6].image}/>
        <Square name = {this.state.princess[7].name} image = {this.state.princess[7].image}/>
        <p className = 'clearfix'></p>
        <Square name = {this.state.princess[8].name} image = {this.state.princess[8].image}/>
        <Square name = {this.state.princess[9].name} image = {this.state.princess[9].image}/>
        <Square name = {this.state.princess[10].name} image = {this.state.princess[10].image}/>
        <Square name = {this.state.princess[11].name} image = {this.state.princess[11].image}/>
        <p className = 'clearfix'></p>
      </div>
      </div>
    );
  }
}

export default App;
