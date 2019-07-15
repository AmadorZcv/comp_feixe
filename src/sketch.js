export default function sketch(p) {
  let canvas;
  let x1 = 0;
  let x2 = 800;
  let num = 10;
  let isVisible = false;
  let y1 = 0;
  let y2 = 800;



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
    p.stroke("red")
    p.strokeWeight(4);
    p.point(x1,y1);
    p.point(x2,y2);
    p.strokeWeight(1);
    p.stroke("black")

    if (isVisible && x1 === x2) {

      feixesY(y1, y2, num);
    }
    if (isVisible && y1===y2) {
      feixesX(x1, x2, num)
    }
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (canvas) {//Make sure the canvas has been created
      x1 = props.x1
      x2 = props.x2
      num = props.num
      isVisible = props.isVisible
      y1 = props.y1
      y2 = props.y2
      
    }
  }
}