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
      <div className="alert alert-info instructions">Click and drag to make a rectangle</div>
      </div>
    );
  }
}
