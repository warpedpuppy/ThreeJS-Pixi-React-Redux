import React from "react";

export default class Canvas extends React.Component {

  componentDidMount() {

    const width = this.width = 800,
          height = this.height = 500;
  
    const  app = this.app = new PIXI.Application(width, height, {transparent:true}),
          stage = this.stage = app.stage;

    let  startX = this.startX = 0,
          startY =this.startY = 0;

    document.getElementById("background_canvas").appendChild(app.view);
    stage.interactive = true;
    stage.buttonMode = true;
    stage.height = this.height;
    stage.width = this.width;

    let t = this.background = new PIXI.Graphics();
    t.beginFill(0xFFFFFF).drawRect(0,0,width, height).endFill();
    t.interactive = true;
    t.buttonMode = true;
    t.cursor = 'pointer';
    stage.addChild(t);
    stage.on('pointerdown', this.draw_square.bind(this));
    stage.on('pointerup', this.end_draw_square.bind(this));
    this.block = this.props.block;
    stage.addChild(this.block)

    app.ticker.add(this.animate.bind(this));
    this.drawing = false;
    this.document = document;

   }
   draw_square(e) {
       this.drawing = true;
       this.startX = this.app.renderer.plugins.interaction.mouse.global.x;
       this.startY = this.app.renderer.plugins.interaction.mouse.global.y;
       this.block.x = this.startX;
       this.block.y = this.startY;
       this.block.clear();
       document.getElementById("inputDiv").classList.remove("hidden");

   }
   end_draw_square(e) {
       this.drawing = false;
   }
   Block(w, h, color) {
       let tint = (color === undefined) ? 0x000000 : color,
          x = new PIXI.Graphics();
       x.beginFill(tint).drawRect(0, 0, w, h).endFill();
       return x;
   }
   animate() {
       if (this.drawing === true) {
           var block_width = this.app.renderer.plugins.interaction.mouse.global.x - this.startX;
           var block_height = this.app.renderer.plugins.interaction.mouse.global.y - this.startY;
           this.block.clear();
           this.block.beginFill(0x000000).drawRect(0, 0, block_width, block_height).endFill();
           this.props.changeDimensions(block_width,block_height);
       }
   }

  render() {
    return (
        <div id="background_canvas"></div>
    );
  }
}
