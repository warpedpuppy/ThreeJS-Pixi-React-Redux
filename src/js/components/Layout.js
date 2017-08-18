import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Canvas from "./Canvas";
import InputDiv from "./InputDiv";
import { WindowResizeListener } from 'react-window-resize-listener'



export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome"
    };
  }




  render() {


    return (

      <div>
      <WindowResizeListener onResize={windowSize => {
      console.log('Window height', windowSize.windowHeight)
      console.log('Window width', windowSize.windowWidth)
      this.state.windowSize = windowSize;
    }}/>
        <Header changeTitle={"asfd"} title={this.state.title} />
        <Canvas size={this.state.windowSize} />
        <InputDiv />
        <Footer />
      </div>
    );
  }
}
