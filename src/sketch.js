export default function sketch(p) {
  let canvas;
  let x1 = 0;
  let x2 = 800;
  let numX = 10;
  let x = false
  let y1 = 0;
  let y2 = 800;
  let numY = 10;
  let y = false


  function feixeX(x) {
    p.line(x, 0, x, 800)
  }

  function feixeY(y) {
    p.line(0, y, 800, y)
  }

  function feixesY(y1, y2, num) {
    if (num > 0) {
      const espaço = y2 - y1;
      const espaçoEntre = Math.round(espaço / num);
      feixeY(y1)
      while (y1 < y2) {
        y1 = y1 + espaçoEntre;
        feixeY(y1)
      }
      //feixeX(x2)
    }


  }

  function feixesX(x1, x2, num) {
    console.log(num);
    if (num > 0) {
      const espaço = x2 - x1;
      const espaçoEntre = Math.round(espaço / num);
      feixeX(x1)
      while (x1 < x2) {
        x1 = x1 + espaçoEntre;
        feixeX(x1)
      }
      feixeX(x2)
    }
  }


  p.setup = () => {
    canvas = p.createCanvas(800, 800);
  }

  p.draw = () => {
    p.background('white');
    if (x) {
      feixesX(x1, x2, numX)
    }
    if (y) {
      feixesY(y1, y2, numY)
    }
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (canvas) {//Make sure the canvas has been created
      x1 = props.x1
      x2 = props.x2
      numX = props.numX
      x = props.x

      y1 = props.y1
      y2 = props.y2
      numY = props.numY
      y = props.y
    }
  }
}