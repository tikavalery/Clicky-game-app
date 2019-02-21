import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"

//image imports
import ninja from "./images/ninja.jpg"
import starwar from "./images/starwar.png"
import starwar2 from "./images/starwar2.jpg"
import starwar3 from "./images/starwar3.jpg"
import ninja2 from "./images/ninja2.jpg"
import ninja3 from "./images/ninja3.jpg"
import voodoo from "./images/voodoo.jpg"
import juju1 from "./images/juju1.jpg"
import juju2 from "./images/juju2.jpg"
import juju3 from "./images/juju3.jpg"
import kimbo from "./images/kimbo.jpg"
import kimbo2 from "./images/kimbo2.jpg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

//Shuffle Array
  shuffleArray = (array) => {
    let imgArray = Img;
  
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
     
    }

    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Already Selected Game Over, Replay?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "ninja":
        return `${ninja}`
      case "starwar":
        return `${starwar}`
      case "starwar2":
        return `${starwar2}`
      case "starwar3":
        return `${starwar3}`
      case "ninja2":
        return `${ninja2}`
      case "ninja3":
        return `${ninja3}`
      case "voodoo":
        return `${voodoo}`
      case "juju1":
        return `${juju1}`
      case "juju2":
        return `${juju2}`
      case "juju3":
        return `${juju3}`
      case "kimbo":
        return `${kimbo}`
      case "kimbo2":
        return `${kimbo2}`
      default:
        return `${kimbo2}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
