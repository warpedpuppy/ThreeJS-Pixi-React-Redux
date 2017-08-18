import React from "react";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="input_div">
              <div className="cinput_text_div">
                  <input type="text" className="form-control form-control-lg" id="enterBlockSize" placeholder="Enter integer to change block height" />
              </div>
              <div className="submit_div">
                  <button className="btn btn-large" id="preview3JS">preview in three.js</button>
              </div>
      </div>
    );
  }
}
