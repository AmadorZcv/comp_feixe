import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = { color: [Math.random() * 255, Math.random() * 255, Math.random() * 255] };
    this.randomColor = this.randomColor.bind(this);
  }
  randomColor() {
    this.setState({ color: [Math.random() * 255, Math.random() * 255, Math.random() * 255] });
  }
  render() {
    return (<div className="App">
      <header className="App-header">
        <button onClick={this.randomColor}>Random Color</button>
        <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
      </header>


    </div>)
  }
}

export default App;
