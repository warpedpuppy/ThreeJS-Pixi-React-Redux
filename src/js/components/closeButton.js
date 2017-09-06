import React from "react";


export default class Header extends React.Component {

close_window(e){
		document.getElementById("threeDContainer").classList.add("hidden");
		document.getElementById("background_canvas").classList.remove("hidden");
		document.getElementById("inputDiv").classList.remove("hidden");
		document.getElementById("headerBanner").classList.remove("hidden");
  }
      
  render() {
    return (<button className="close_button btn btn-danger" onClick={() => this.close_window()}>close window</button>);
  }
}
