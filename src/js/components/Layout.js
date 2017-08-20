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
    };

  }

  render() {

    return (
      <div>
        <Header changeTitle={"asfd"}  />
        <Canvas />
        <InputDiv />
        <Footer />
      </div>
    );
  }
}
