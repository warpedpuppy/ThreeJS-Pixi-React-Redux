import React from "react";

export default class Layout extends React.Component {


  render() {
    return (
      <div class="input_div">
              <div class="cinput_text_div">
                  <input type="text" class="form-control form-control-lg" id="enterBlockSize" placeholder="Enter integer to change block height" />
              </div>
              <div class="submit_div">
                  <button class="btn btn-large" id="preview3JS">preview in three.js</button>
              </div>
      </div>
    );
  }
}
