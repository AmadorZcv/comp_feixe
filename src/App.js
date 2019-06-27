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
      numX: 10,
      numY: 10,
      x: false,
      y: false
    };
    this.randomColor = this.randomColor.bind(this);
  }
  randomColor() {
    this.setState({ color: [Math.random() * 255, Math.random() * 255, Math.random() * 255] });
  }

  //X

  onChangeX = (e) => {
    let { checked } = e.target
    this.setState({ x: checked })
  }
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
  onChangeNumX = (e) => {
    let { value } = e.target
    value = Number(value)
    this.setState({ numX: value })
  }

  //Y

  onChangeY = (e) => {
    let { checked } = e.target
    this.setState({ y: checked })
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
  onChangeNumY = (e) => {
    let { value } = e.target
    value = Number(value)
    this.setState({ numY: value })
  }


  render() {
    const { x1, x2, numX, x, y, numY, y1, y2 } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-control">
            <Form>
              <Form.Group controlId="x1">
                <Form.Label>X inicial</Form.Label>
                <Form.Control type="number" placeholder="X1" value={this.state.x1} onChange={(text) => this.onChangeX1(text)} />
              </Form.Group>

              <Form.Group controlId="x2">
                <Form.Label>X final</Form.Label>
                <Form.Control type="number" placeholder="X2" value={this.state.x2} onChange={(text) => this.onChangeX2(text)} />
              </Form.Group>
              <Form.Group controlId="numX">
                <Form.Label>Numero de feixes</Form.Label>
                <Form.Control type="number" placeholder="numX" value={this.state.numX} onChange={(text) => this.onChangeNumX(text)} />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check checked={this.state.x} type="checkbox" label="Eixo das Abcissas(X)" onChange={(e) => this.onChangeX(e)} />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlId="x1">
                <Form.Label>Y inicial</Form.Label>
                <Form.Control type="number" placeholder="Y1" value={this.state.y1} onChange={(text) => this.onChangeY1(text)} />
              </Form.Group>

              <Form.Group controlId="x2">
                <Form.Label>Y final</Form.Label>
                <Form.Control type="number" placeholder="Y2" value={this.state.y2} onChange={(text) => this.onChangeY2(text)} />
              </Form.Group>
              <Form.Group controlId="numX">
                <Form.Label>Numero de feixes</Form.Label>
                <Form.Control type="number" placeholder="numX" value={this.state.numY} onChange={(text) => this.onChangeNumY(text)} />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check checked={this.state.y} type="checkbox" label="Eixo das Ordenadas(Y)" onChange={(e) => this.onChangeY(e)} />
              </Form.Group>
            </Form>
          </div>
          <P5Wrapper sketch={sketch} color={this.state.color}
            x1={x1} x2={x2} numX={numX} x={x}
            y1={y1} y2={y2} numY={numY} y={y}></P5Wrapper>
        </header>


      </div>)
  }
}

export default App;
