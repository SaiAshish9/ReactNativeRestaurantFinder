import React, { Component } from "react";

import Canvas from "react-native-canvas";

export default class Canvas1 extends Component {
  handleCanvas = (canvas) => {
                               if (canvas === null) return;
                               // const ctx = canvas.getContext("2d")
                               // ctx.fillStyle = "#fff";
                               // // ctx.rotate(180*Math.PI/180);
                               // ctx.fillRect(50, 0, 200, 100);
                               // // ctx.skew(0.3,0.4)
                               // ctx.strokeStyle="#000"
                               // ctx.lineWidth=5;
                               // // ctx.lineJoin="round"
                               // ctx.strokeRect(50, 0, 200, 100);
                               var ctx = canvas.getContext("2d");
                               ctx.beginPath();
                               ctx.moveTo(20, 10);
                               ctx.lineTo(80, 10);
                               ctx.quadraticCurveTo(90, 10, 90, 20);
                               ctx.lineTo(90, 80);
                               ctx.quadraticCurveTo(90, 90, 80, 90);
                               ctx.lineTo(20, 90);
                               ctx.quadraticCurveTo(10, 90, 10, 80);
                               ctx.lineTo(10, 20);
                               ctx.quadraticCurveTo(10, 10, 20, 10);
                               ctx.stroke();
                               ctx.transform(1, 0, -0.5, 1, 0, 0);
                             };

  render() {
    return <Canvas ref={this.handleCanvas} />;
  }
}
