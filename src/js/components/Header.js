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
      <h4>convert 2d rectangle to 3d</h4>
      <p>This is a practice experiment using react and threejs.</p>
      <ol>
      <li>click and drag to draw a rectangle.</li>
      <li>use the input field to control the height.</li>
      <li>press the 'render in 3d' button to see the rectangle in three dimensions.</li>
      </ol>
      </div>

      </div>
    );
  }
}
