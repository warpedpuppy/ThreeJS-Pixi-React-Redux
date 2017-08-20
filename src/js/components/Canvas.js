import React from "react";

export default class Canvas extends React.Component {





  render() {
    var divStyle = {
      width: this.props.browserWidth,
      height: this.props.browserHeight
    }
    return (
      <div>

              <div id="background_canvas" style={divStyle}></div>
              <div>height: {this.props.browserHeight}</div>


        </div>
    );
  }
}
