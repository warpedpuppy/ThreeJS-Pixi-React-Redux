import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Canvas from "./Canvas";
import InputDiv from "./InputDiv";


export default class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Welcome",
      block: new PIXI.Graphics(),
      block_height:0,
      block_width:0
    };

  }
  changeDimensions(block_width, block_height){
    this.setState({block_width});
    this.setState({block_height});
  }

  render() {

    return (
      <div>
        <Header changeTitle={"asfd"}  />
        <Canvas block={this.state.block} block_width={this.state.block_width} block_height={this.state.block_height} changeDimensions={this.changeDimensions.bind(this)}/>
        <InputDiv block={this.state.block} block_width={this.state.block_width} block_height={this.state.block_height}  changeDimensions={this.changeDimensions.bind(this)}/>
        <Footer />
      </div>
    );
  }
}
