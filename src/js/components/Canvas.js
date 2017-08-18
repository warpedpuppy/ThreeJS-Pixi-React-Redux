import React from "react";
import { WindowResizeListener } from 'react-window-resize-listener'


export default class Canvas extends React.Component {
  render() {
      console.log(this.props.size)
    return (
      <div>
        <div id="background_canvas" ></div>
        </div>
    );
  }
}
