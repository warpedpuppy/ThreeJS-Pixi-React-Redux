import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
      <div className="alert alert-info instructions">
      <h1>instructions</h1>
      <ol>
      <li>click and drag to draw a square</li>
      <li>change the height of the square in the input field</li>
      <li>click the 'preview' button to see your square in 3D</li>
      </ol>
      </div>

      </div>
    );
  }
}
