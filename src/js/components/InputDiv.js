import React from "react";

export default class Layout extends React.Component {

  open3D(e){
    window.open("/threejs.html?width=" + Math.abs(this.props.block_width).toString() + "&height=" + Math.abs(this.props.block_height).toString());

  }


  handleChange(e){
    var entry_value = e.target.value;

    if (!isNaN(entry_value)) {
        var block_height = parseInt(entry_value);
        document.getElementById("enterBlockSize").setAttribute("placeholder", "Enter integer to change block height");
        this.props.block.clear();
        this.props.block.beginFill("#000000").drawRect(0, 0, this.props.block_width, block_height).endFill();
        this.props.changeDimensions(this.props.block_width,block_height);
    } else {
        document.getElementById("enterBlockSize").setAttribute("placeholder", "must be integer!")

    }
  }


  render() {
    return (
      <div className="input_div" id="inputDiv">
              <div className="cinput_text_div form-group form-inline">
              <label>block height:</label>
                  <input type="text" className="form-control form-control-lg" id="enterBlockSize" placeholder="Enter integer to change block height"  onChange={this.handleChange.bind(this)} value={Math.abs(this.props.block_height)}/>
              </div>
              <div className="submit_div">
                  <button className="btn btn-large" id="preview3JS" onClick={this.open3D.bind(this)} >preview in three.js</button>
              </div>
      </div>
    );
  }
}
