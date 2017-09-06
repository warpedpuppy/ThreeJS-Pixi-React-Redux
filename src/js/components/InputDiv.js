import React from "react";

export default class Layout extends React.Component {

  open3D(e){
    document.getElementById("threeDContainer").classList.remove("hidden");
    document.getElementById("background_canvas").classList.add("hidden");
    document.getElementById("inputDiv").classList.add("hidden");
    document.getElementById("headerBanner").classList.add("hidden");
  }


  handleChange(e){
    

        let block_height = parseInt(document.getElementById("enterBlockHeight").value);
        let block_width = parseInt(document.getElementById("enterBlockWidth").value);
        this.props.block.clear();
        this.props.block.beginFill("#000000").drawRect(0, 0, block_width, block_height).endFill();
        this.props.changeDimensions(block_width,block_height);
    
  }


  render() {
    return (

    <div id="inputDiv" className="cinput_text_div form-group form-inline hidden">

      <div className="form-group input_cont">

        <label className="col-2 col-form-label">block width:</label>
        <div className="col-4">
        <input type="text" className="form-control form-control-lg" id="enterBlockWidth" placeholder="Enter integer to change block width"  onChange={this.handleChange.bind(this)} value={Math.abs(this.props.block_width)}/>
        </div>

        <label  className="col-2 col-form-label">block height:</label>
        <div className="col-4">
        <input type="text" className="form-control form-control-lg" id="enterBlockHeight" placeholder="Enter integer to change block height"  onChange={this.handleChange.bind(this)} value={Math.abs(this.props.block_height)}/>
        </div>

      </div>

      <button className="btn btn-large btn-success" id="preview3JS" onClick={this.open3D.bind(this)} >preview in three.js</button>
    </div>

    );
  }
}
