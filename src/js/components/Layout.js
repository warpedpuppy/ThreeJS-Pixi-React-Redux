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
      title: "Welcome",
      browserHeight: 0,
      browserWidth: 0

    };
  }

  render() {


    return (
      <div>
      <WindowResizeListener onResize={windowSize => {

      //document.getElementById('background_canvas').setAttribute("style", "width:"+windowSize.windowWidth+"px;height:"+windowSize.windowHeight+"px;");
      this.setState({browserHeight: windowSize.windowHeight, browserWidth: windowSize.windowWidth})

    }}/>

        <Header changeTitle={"asfd"}  />
        <Canvas browserHeight={this.state.browserHeight} browserWidth={this.state.browserWidth} />
        <InputDiv />
        <Footer />
      </div>
    );
  }
}
