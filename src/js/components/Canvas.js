import React from "react";
import { WindowResizeListener } from 'react-window-resize-listener';
export default class Canvas extends React.Component {




  componentDidMount() {
    var renderer = PIXI.autoDetectRenderer(0,0, {antialias: false, transparent: true, resolution: 1})
    document.getElementById("background_canvas").appendChild(renderer.view);
    this.renderer = renderer;


   }
   loaded(){

      var stage = new PIXI.Container(),
        startX = 0,
        startY = 0;

      this.startX = startX;
      this.startY = startY;

      stage.interactive = true;
      stage.buttonMode = true;
      stage.height = this.height;
      stage.width = this.width;
      stage.on('pointerdown', this.draw_square.bind(this));
      stage.on('pointerup', this.end_draw_square.bind(this));
      this.stage = stage;

      var background = new this.Block(this.width, this.height, 0xFFFFFF);
      stage.addChild(background);
      this.background = background;

      this.block = this.props.block;



     this.animate();
     this.drawing = false;
     this.document = document;

   }

   draw_square(e) {

       this.drawing = true;
       this.background.removeChildren();
       this.startX = this.renderer.plugins.interaction.mouse.global.x;
       this.startY = this.renderer.plugins.interaction.mouse.global.y;

       this.block.x = this.startX;
       this.block.y = this.startY;
       this.block.clear();
       this.background.addChild(this.block);

       document.getElementById("inputDiv").className = "inputVisible";


   }

   end_draw_square(e) {
       this.drawing = false;
   }
   Block(w, h, color) {
       var tint = (color === undefined) ? 0x000000 : color;
       var x = new PIXI.Graphics();
       x.beginFill(tint).drawRect(0, 0, w, h).endFill();
       return x;
   }
   animate() {

       requestAnimationFrame(this.animate.bind(this));
       this.renderer.render(this.stage);

       if (this.drawing === true) {
           var block_width = this.renderer.plugins.interaction.mouse.global.x - this.startX;
           var block_height = this.renderer.plugins.interaction.mouse.global.y - this.startY;
           this.block.clear();

           this.block.beginFill("#333333").drawRect(0, 0, block_width, block_height).endFill();
           this.props.changeDimensions(block_width,block_height);

       }
   }

  render() {
    return (
      <div>
        <div id="background_canvas"></div>
        <WindowResizeListener onResize={windowSize => {
        document.getElementById('background_canvas').firstChild.setAttribute("style", "width:"+windowSize.windowWidth+"px;height:"+windowSize.windowHeight+"px;");
        this.height = windowSize.windowHeight;
        this.width = windowSize.windowWidth;
        this.renderer.resize(this.width, this.height);
        this.loaded();
        this.props.changeDimensions(0,0);
      }}/>
      </div>
    );
  }
}
