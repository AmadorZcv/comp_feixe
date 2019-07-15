import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import './App.css';
import { Form } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
      x1: 0,
      x2: 800,
      y1: 0,
      y2: 800,
      num: 10,
      isVisible: false,
    };
    this.randomColor = this.randomColor.bind(this);
  }
  randomColor() {
    this.setState({ color: [Math.random() * 255, Math.random() * 255, Math.random() * 255] });
  }

  //X

  onChangeX1 = (e) => {
    let { value } = e.target
    value = Number(value)
    this.setState({ x1: value })
  }
  onChangeX2 = (e) => {
    let { value } = e.target
    value = Number(value)
    this.setState({ x2: value })
  }
  onChangenum = (e) => {
    let { value } = e.target
    value = Number(value)
    this.setState({ num: value })
  }

  //Y
  onChangeIsVisible = (e) => {
    let { checked } = e.target
    this.setState({ isVisible: checked })
  }


  onChangeY1 = (e) => {
    let { value } = e.target
    value = Number(value)
    this.setState({ y1: value })
  }
  onChangeY2 = (e) => {
    let { value } = e.target
    value = Number(value)
    this.setState({ y2: value })
  }




  render() {
    const { x1, x2, num, isVisible, y1, y2 } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-control">
            <Form>
              <Form>
                <Form.Group controlId="x1">
                  <Form.Label>X1</Form.Label>
                  <Form.Control type="number" placeholder="X1" value={this.state.x1} onChange={(text) => this.onChangeX1(text)} />
                </Form.Group>
                <Form.Group controlId="y1">
                  <Form.Label>Y1</Form.Label>
                  <Form.Control type="number" placeholder="Y1" value={this.state.y1} onChange={(text) => this.onChangeY1(text)} />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="x2">
                  <Form.Label>X2</Form.Label>
                  <Form.Control type="number" placeholder="X2" value={this.state.x2} onChange={(text) => this.onChangeX2(text)} />
                </Form.Group>

                <Form.Group controlId="y2">
                  <Form.Label>Y2</Form.Label>
                  <Form.Control type="number" placeholder="Y2" value={this.state.y2} onChange={(text) => this.onChangeY2(text)} />
                </Form.Group>
              </Form>
            </Form>

            <Form.Group controlId="num">
              <Form.Label>Numero de feixes</Form.Label>
              <Form.Control type="number" placeholder="num" value={this.state.num} onChange={(text) => this.onChangenum(text)} />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check checked={this.state.isVisible} type="checkbox" label="Mostrar feixes" onChange={(e) => this.onChangeIsVisible(e)} />
            </Form.Group>

          </div>
          <P5Wrapper sketch={sketch} color={this.state.color}
            x1={x1} x2={x2} num={num} 
            y1={y1} y2={y2} isVisible = {isVisible}>
          </P5Wrapper>
        </header>


      </div >)
  }
}

export default App;
